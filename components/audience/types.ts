import type { ReactNode } from "react";
import type { DoodleName } from "@/components/landing/Doodle";

export type Action = { label: string; href: string };

export type Intro = {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  doodle?: DoodleName;
};

export type Feature = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type Scenario = {
  title: string;
  description: string;
  /** Ticket stub / deck label: where or when this happens. */
  tag?: string;
  /** Timeline label, e.g. "Mon" or "9:40". */
  time?: string;
  /** Switcher only: what you say, and what lands. */
  say?: string;
  sayLang?: string;
  get?: string;
  where?: string;
};
