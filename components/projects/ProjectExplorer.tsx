"use client";

import { useId, useMemo, useState } from "react";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import type { Project } from "../../constants/projects";
import ProjectGrid from "./ProjectGrid";

type ProjectExplorerProps = {
  projects: readonly Project[];
};

type CategoryOption = {
  label: string;
  value: string;
};

const ALL_CATEGORIES = "all";
const CATEGORY_ORDER: Record<string, number> = {
  "ui/ux design": 0,
  development: 1,
  "graphics design": 2,
};

const normalizeText = (value: string | number) =>
  String(value).trim().toLocaleLowerCase();

const getProjectCategories = (category: string) =>
  category
    .split("|")
    .map((value) => value.trim())
    .filter(Boolean);

const formatCategoryLabel = (category: string) => {
  const normalizedCategory = normalizeText(category);

  if (normalizedCategory === "ui/ux design") return "UI/UX Design";
  if (normalizedCategory === "graphics design") return "Graphics Design";

  return category
    .toLocaleLowerCase()
    .replace(/\b\w/g, (character) => character.toLocaleUpperCase());
};

const ProjectExplorer = ({ projects }: ProjectExplorerProps) => {
  const searchInputId = useId();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const categoryOptions = useMemo<CategoryOption[]>(() => {
    const uniqueCategories = new Map<string, string>();

    projects.forEach(({ category }) => {
      getProjectCategories(category).forEach((projectCategory) => {
        const value = normalizeText(projectCategory);

        if (!uniqueCategories.has(value)) {
          uniqueCategories.set(value, formatCategoryLabel(projectCategory));
        }
      });
    });

    return Array.from(uniqueCategories, ([value, label]) => ({ value, label })).sort(
      (firstCategory, secondCategory) =>
        (CATEGORY_ORDER[firstCategory.value] ?? 99) -
          (CATEGORY_ORDER[secondCategory.value] ?? 99) ||
        firstCategory.label.localeCompare(secondCategory.label),
    );
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    return projects.filter((project) => {
      const searchableContent = [
        project.title,
        project.description,
        project.category,
        project.year,
        project.status ?? "",
      ]
        .map(normalizeText)
        .join(" ");
      const projectCategories = getProjectCategories(project.category).map(
        normalizeText,
      );

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableContent.includes(normalizedQuery);
      const matchesCategory =
        selectedCategory === ALL_CATEGORIES ||
        projectCategories.includes(selectedCategory);

      return matchesQuery && matchesCategory;
    });
  }, [projects, query, selectedCategory]);

  const hasActiveFilters =
    query.trim().length > 0 || selectedCategory !== ALL_CATEGORIES;

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory(ALL_CATEGORIES);
  };

  return (
    <>
      <section
        data-project-detail-intro
        role="search"
        aria-label="Search and filter projects"
        className="mb-10 border-y border-[var(--project-line-soft)] py-5 md:mb-12 md:py-6 lg:mb-16"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="w-full lg:max-w-[35rem]">
            <label
              htmlFor={searchInputId}
              className="mb-2 block font-nm-medium text-sm font-medium text-[var(--project-control-ink)]"
            >
              Search projects
            </label>
            <div className="relative">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[var(--project-muted)]"
                strokeWidth={1.8}
              />
              <input
                id={searchInputId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, category, or keyword"
                aria-controls="project-search-results"
                autoComplete="off"
                className="h-12 w-full appearance-none rounded-full border border-[var(--project-line)] bg-[var(--project-canvas)] py-3 pl-12 pr-12 font-nm-book text-base text-[var(--project-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--project-muted)] focus:border-[var(--project-focus)] focus:shadow-[0_0_0_3px_var(--project-line-soft)]"
              />
              {query.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear project search"
                  className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--project-muted)] transition-colors hover:bg-[var(--project-surface)] hover:text-[var(--project-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--project-canvas)]"
                >
                  <XMarkIcon aria-hidden="true" className="size-4" strokeWidth={2} />
                </button>
              ) : null}
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <p className="mb-2 font-nm-medium text-sm font-medium text-[var(--project-control-ink)]">
              Filter by category
            </p>
            <div
              role="group"
              aria-label="Project category"
              className="flex flex-wrap gap-2"
            >
              <button
                type="button"
                aria-pressed={selectedCategory === ALL_CATEGORIES}
                aria-controls="project-search-results"
                onClick={() => setSelectedCategory(ALL_CATEGORIES)}
                className={`rounded-full border px-4 py-2 font-nm-medium text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--project-canvas)] ${
                  selectedCategory === ALL_CATEGORIES
                    ? "border-[var(--project-ink)] bg-[var(--project-ink)] text-[var(--project-canvas)]"
                    : "border-[var(--project-line)] bg-[var(--project-canvas)] text-[var(--project-control-ink)] hover:border-[var(--project-line-strong)] hover:bg-[var(--project-surface)]"
                }`}
              >
                All
              </button>
              {categoryOptions.map(({ label, value }) => {
                const isSelected = selectedCategory === value;

                return (
                  <button
                    type="button"
                    key={value}
                    aria-pressed={isSelected}
                    aria-controls="project-search-results"
                    onClick={() => setSelectedCategory(value)}
                    className={`rounded-full border px-4 py-2 font-nm-medium text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--project-canvas)] ${
                      isSelected
                        ? "border-[var(--project-ink)] bg-[var(--project-ink)] text-[var(--project-canvas)]"
                        : "border-[var(--project-line)] bg-[var(--project-canvas)] text-[var(--project-control-ink)] hover:border-[var(--project-line-strong)] hover:bg-[var(--project-surface)]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 flex min-h-6 items-center justify-between gap-4">
          <p
            aria-live="polite"
            aria-atomic="true"
            className="font-nm-book text-sm text-[var(--project-muted)]"
          >
            Showing {filteredProjects.length} of {projects.length}{" "}
            {projects.length === 1 ? "project" : "projects"}
          </p>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="shrink-0 font-nm-medium text-sm font-medium text-[var(--project-link)] underline decoration-[var(--project-line-strong)] underline-offset-4 transition-colors hover:text-[var(--project-ink)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--project-canvas)]"
            >
              Reset filters
            </button>
          ) : null}
        </div>
      </section>

      <div id="project-search-results">
        {filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} showStatusRibbon />
        ) : (
          <div
            data-project-detail-reveal
            className="flex min-h-[22rem] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--project-line)] bg-[var(--project-surface)] px-6 py-16 text-center"
          >
            <span className="mb-5 flex size-14 items-center justify-center rounded-full bg-[var(--project-canvas)] text-[var(--project-muted)] shadow-[0_8px_24px_var(--project-shadow)]">
              <MagnifyingGlassIcon aria-hidden="true" className="size-6" strokeWidth={1.6} />
            </span>
            <h2 className="font-nm-medium text-2xl font-medium text-[var(--project-ink)] md:text-[28px]">
              No projects found
            </h2>
            <p className="mt-2 max-w-md font-nm-book text-base leading-relaxed text-[var(--project-card-copy)] md:text-lg">
              Try a different keyword or category to explore more work.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-full bg-[var(--project-ink)] px-5 py-2.5 font-nm-medium text-sm font-medium text-[var(--project-canvas)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--project-surface)]"
            >
              Clear search and filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectExplorer;
