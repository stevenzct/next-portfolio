import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaAws, FaCloud, FaDatabase, FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiAnsible,
  SiBitbucket,
  SiClaudecode,
  SiCplusplus,
  SiDigitalocean,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiGraphql,
  SiJenkins,
  SiKubernetes,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPostgresql,
  SiPython,
  SiRailway,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiRust,
  SiSharp,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
  SiSvelte,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import {
  TbAutomation,
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd,
  TbBrandOpenai,
  TbVectorBezier,
} from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

export type AboutTechTag = {
  label: string;
  icon: IconType;
  color: string;
};

export type AboutTechGroup = {
  category: string;
  tags: readonly AboutTechTag[];
};

export const aboutTechStack = [
  {
    category: "Frontend",
    tags: [
      { label: "ReactJS", icon: SiReact, color: "#61DAFB" },
      { label: "ReactNative", icon: SiReact, color: "#61DAFB" },
      { label: "VueJS", icon: SiVuedotjs, color: "#4FC08D" },
      { label: "Svelte", icon: SiSvelte, color: "#FF3E00" },
      { label: "AngularJS", icon: SiAngular, color: "#DD0031" },
      { label: "NextJS", icon: SiNextdotjs, color: "#FFFFFF" },
      { label: "NuxtJS", icon: SiNuxt, color: "#00DC82" },
    ],
  },
  {
    category: "Backend",
    tags: [
      { label: "NodeJS", icon: SiNodedotjs, color: "#5FA04E" },
      { label: "ExpressJS", icon: SiExpress, color: "#FFFFFF" },
      { label: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { label: "Java", icon: FaJava, color: "#ED8B00" },
      { label: "SpringBoot", icon: SiSpringboot, color: "#6DB33F" },
      { label: "Python", icon: SiPython, color: "#3776AB" },
      { label: "Django", icon: SiDjango, color: "#44B78B" },
      { label: "Ruby", icon: SiRuby, color: "#CC342D" },
      { label: "RoR", icon: SiRubyonrails, color: "#D30001" },
      { label: "Rust", icon: SiRust, color: "#DEA584" },
      { label: "C#", icon: SiSharp, color: "#9B4F96" },
      { label: "C++", icon: SiCplusplus, color: "#659AD2" },
      { label: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    category: "Database",
    tags: [
      { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { label: "MySQL", icon: SiMysql, color: "#4479A1" },
      { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { label: "MSSQL", icon: DiMsqlServer, color: "#CC2927" },
      { label: "SQLite", icon: SiSqlite, color: "#78C8E8" },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { label: "MariaDB", icon: SiMariadb, color: "#C0765A" },
      { label: "DynamoDB", icon: FaDatabase, color: "#4053D6" },
      { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    category: "DevOps",
    tags: [
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { label: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { label: "Bitbucket", icon: SiBitbucket, color: "#2684FF" },
      { label: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { label: "Docker", icon: SiDocker, color: "#2496ED" },
      { label: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { label: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { label: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { label: "Railway", icon: SiRailway, color: "#B7A5FF" },
      { label: "AWS", icon: FaAws, color: "#FF9900" },
      { label: "Azure", icon: VscAzure, color: "#0078D4" },
      { label: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { label: "OCI", icon: FaCloud, color: "#F80000" },
      { label: "DigitalOcean", icon: SiDigitalocean, color: "#0080FF" },
    ],
  },
  {
    category: "AI",
    tags: [
      { label: "OpenAI Codex", icon: TbBrandOpenai, color: "#FFFFFF" },
      { label: "Claude Code", icon: SiClaudecode, color: "#D97757" },
      { label: "AI workflows", icon: TbAutomation, color: "#A78BFA" },
    ],
  },
  {
    category: "Design",
    tags: [
      { label: "Figma", icon: SiFigma, color: "#F24E1E" },
      { label: "Adobe XD", icon: TbBrandAdobeXd, color: "#FF61F6" },
      {
        label: "Photoshop",
        icon: TbBrandAdobePhotoshop,
        color: "#31A8FF",
      },
      { label: "Prototyping", icon: TbVectorBezier, color: "#F8D66D" },
    ],
  },
] satisfies readonly AboutTechGroup[];
