"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  ArrowsPointingInIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import type { ProjectGalleryImage } from "../../constants/projectDetails";
import { constrainImageView, zoomImageView, type ImagePoint, type ImageView } from "../../utils/imageZoom";

type ProjectImageLightboxProps = {
  images: ProjectGalleryImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

const FIT_VIEW: ImageView = { scale: 1, x: 0, y: 0 };
const MAX_ZOOM = 8;
const ZOOM_STEP = 1.5;
const controlClassName =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-25";

export default function ProjectImageLightbox({ images, index, onIndexChange, onClose }: ProjectImageLightboxProps) {
  const [view, setView] = useState(FIT_VIEW);
  const viewRef = useRef(FIT_VIEW);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const viewportRef = useRef<HTMLButtonElement>(null);
  const pointers = useRef(new Map<number, ImagePoint>());
  const pointerStart = useRef<ImagePoint | null>(null);
  const suppressClick = useRef(false);
  const image = images[index];
  const fitScale = Math.min(viewport.width / image.width, viewport.height / image.height, 1);
  const fittedWidth = image.width * fitScale;
  const fittedHeight = image.height * fitScale;
  const isZoomed = view.scale > 1;

  const updateView = useCallback((next: ImageView) => {
    const bounded = constrainImageView(next, { width: fittedWidth, height: fittedHeight }, viewport, MAX_ZOOM);
    viewRef.current = bounded;
    setView(bounded);
  }, [fittedWidth, fittedHeight, viewport]);

  const fitImage = () => updateView(FIT_VIEW);

  // Preserve the image point beneath the cursor or pinch midpoint while scaling.
  const zoomAt = useCallback((scale: number, point: ImagePoint = { x: 0, y: 0 }) => {
    updateView(zoomImageView(viewRef.current, scale, point, MAX_ZOOM));
  }, [updateView]);

  useLayoutEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const measure = () => {
      setViewport({ width: element.clientWidth, height: element.clientHeight });
      viewRef.current = FIT_VIEW;
      setView(FIT_VIEW);
      pointers.current.clear();
      setIsDragging(false);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [image.src]);

  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = element.getBoundingClientRect();
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? rect.height : 1);
      zoomAt(viewRef.current.scale * Math.exp(-delta * 0.002), {
        x: event.clientX - rect.left - rect.width / 2,
        y: event.clientY - rect.top - rect.height / 2,
      });
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  const showImage = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= images.length) return;
    fitImage();
    onIndexChange(nextIndex);
  };

  const releasePointer = (pointerId: number) => {
    pointers.current.delete(pointerId);
    if (pointers.current.size === 0) setIsDragging(false);
  };

  return (
    <Dialog open onClose={onClose} initialFocus={closeButtonRef} className="relative z-[100]">
      <div className="fixed inset-0 bg-black/95" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6">
        <DialogPanel
          className="flex h-[calc(100dvh-32px)] w-full max-w-[1600px] min-w-0 flex-col text-white sm:h-[calc(100dvh-48px)]"
          onKeyDown={(event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              event.stopPropagation();
              showImage(index + (event.key === "ArrowRight" ? 1 : -1));
            } else if (event.key === "+" || event.key === "=" || event.key === "-") {
              event.preventDefault();
              zoomAt(viewRef.current.scale * (event.key === "-" ? 1 / ZOOM_STEP : ZOOM_STEP));
            } else if (event.key === "0") {
              event.preventDefault();
              fitImage();
            }
          }}
        >
          <div className="flex shrink-0 items-center justify-between gap-2 pb-3 sm:gap-4">
            <DialogTitle className="min-w-0 truncate font-nm-medium text-sm font-medium sm:text-base">
              {image.title ?? "Project image"}
            </DialogTitle>
            <Description className="sr-only">
              Browse with the previous and next buttons or arrow keys. Click the
              image to zoom, scroll or pinch to adjust zoom, and drag to inspect
              details. Use plus and minus to zoom, or zero to fit the image.
              Press Escape to close.
            </Description>
            <div className="flex shrink-0 gap-1 sm:gap-2">
              <button type="button" onClick={() => zoomAt(viewRef.current.scale / ZOOM_STEP)} aria-label="Zoom out" disabled={!isZoomed} className={controlClassName}>
                <MagnifyingGlassMinusIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => zoomAt(viewRef.current.scale * ZOOM_STEP)} aria-label="Zoom in" disabled={view.scale >= MAX_ZOOM} className={controlClassName}>
                <MagnifyingGlassPlusIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button type="button" onClick={fitImage} aria-label="Fit image to screen" disabled={!isZoomed} className={controlClassName}>
                <ArrowsPointingInIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close image viewer" className={controlClassName}>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>

          <button
            ref={viewportRef}
            type="button"
            aria-label={isZoomed ? "Fit image to screen" : "Zoom image"}
            className={`relative block min-h-0 w-full flex-1 touch-none overflow-hidden overscroll-contain rounded-lg select-none focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${isZoomed ? isDragging ? "cursor-grabbing" : "cursor-grab" : "cursor-zoom-in"}`}
            onClick={(event) => {
              if (suppressClick.current) {
                suppressClick.current = false;
                return;
              }
              if (isZoomed) {
                fitImage();
              } else {
                const rect = event.currentTarget.getBoundingClientRect();
                zoomAt(Math.min(MAX_ZOOM, Math.max(2, 1 / fitScale)), event.detail === 0 ? undefined : {
                  x: event.clientX - rect.left - rect.width / 2,
                  y: event.clientY - rect.top - rect.height / 2,
                });
              }
            }}
            onPointerDown={(event) => {
              if (event.button !== 0) return;
              const point = { x: event.clientX, y: event.clientY };
              if (pointers.current.size === 0) {
                pointerStart.current = point;
                suppressClick.current = false;
              } else {
                suppressClick.current = true;
              }
              pointers.current.set(event.pointerId, point);
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const previous = pointers.current.get(event.pointerId);
              if (!previous) return;
              const before = Array.from(pointers.current.values());
              const point = { x: event.clientX, y: event.clientY };
              pointers.current.set(event.pointerId, point);
              if (pointers.current.size === 2) {
                suppressClick.current = true;
                const after = Array.from(pointers.current.values());
                const distance = (points: ImagePoint[]) => Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
                const previousDistance = distance(before);
                if (previousDistance === 0) return;
                const rect = event.currentTarget.getBoundingClientRect();
                const midpoint = (points: ImagePoint[]) => ({
                  x: (points[0].x + points[1].x) / 2 - rect.left - rect.width / 2,
                  y: (points[0].y + points[1].y) / 2 - rect.top - rect.height / 2,
                });
                const oldCenter = midpoint(before);
                const newCenter = midpoint(after);
                const current = viewRef.current;
                updateView(zoomImageView(current, current.scale * distance(after) / previousDistance, oldCenter, MAX_ZOOM, newCenter));
              } else if (pointers.current.size === 1) {
                const start = pointerStart.current;
                if (start && Math.hypot(point.x - start.x, point.y - start.y) > 4) suppressClick.current = true;
                if (suppressClick.current && viewRef.current.scale > 1) {
                  setIsDragging(true);
                  updateView({
                    ...viewRef.current,
                    x: viewRef.current.x + point.x - previous.x,
                    y: viewRef.current.y + point.y - previous.y,
                  });
                }
              }
            }}
            onPointerUp={(event) => releasePointer(event.pointerId)}
            onPointerCancel={(event) => {
              suppressClick.current = true;
              releasePointer(event.pointerId);
            }}
            onLostPointerCapture={(event) => releasePointer(event.pointerId)}
          >
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              unoptimized
              draggable={false}
              className="pointer-events-none absolute left-1/2 top-1/2 block max-w-none will-change-transform"
              style={{
                width: fittedWidth,
                height: fittedHeight,
                transform: `translate(-50%, -50%) translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
              }}
            />
          </button>

          <div className="flex shrink-0 items-center justify-center gap-4 pt-3">
            <button type="button" onClick={() => showImage(index - 1)} disabled={index === 0} aria-label="View previous image" className={controlClassName}>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            <p aria-live="polite" aria-atomic="true" className="min-w-16 text-center font-nm-book text-sm tabular-nums text-white/70">
              <span className="sr-only">Image </span>
              {index + 1} / {images.length}
              <span className="sr-only">: {image.title}</span>
            </p>
            <button type="button" onClick={() => showImage(index + 1)} disabled={index === images.length - 1} aria-label="View next image" className={controlClassName}>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
