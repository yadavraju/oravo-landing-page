import {
  AlignLeft,
  AtSign,
  Bold,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Columns2,
  FileCode2,
  Forward,
  Hash,
  Headphones,
  Italic,
  Link2,
  List,
  Lock,
  Maximize2,
  Minus,
  MoreHorizontal,
  PanelLeft,
  Paperclip,
  Plus,
  Reply,
  ReplyAll,
  Search,
  Share,
  Sparkles,
  Star,
  Trash2,
  Underline,
  X,
} from "lucide-react";
import type { ReactNode } from "react";

/*
 * A Mac window whose chrome is drawn for the app inside it.
 *
 * Every demo used to sit in the same box: three dots, a label, a hairline.
 * Seen twice on a page it read as a template. Each app now gets the toolbar it
 * actually has (Gmail's compose bar, Slack's search bar and channel header,
 * Docs' menu and formatting rows, an editor's tab strip, Notion's breadcrumb),
 * redrawn in the site's warm palette so nothing on the page turns grey or
 * dark. Server-safe: no hooks, so server and client components can both use it.
 */

export type MacApp =
  | "gmail"
  | "outlook"
  | "slack"
  | "notion"
  | "docs"
  | "word"
  | "editor"
  | "linear"
  | "chat"
  | "notes"
  | "browser"
  | "plain";

type Props = {
  app?: MacApp;
  /** Window or document title (channel, subject, file, page). */
  title?: string;
  /** Secondary label: a recipient, a workspace, a breadcrumb parent. */
  subtitle?: string;
  /** Address shown in browser-style chrome. */
  url?: string;
  /** Drops the second toolbar row on apps that have one. */
  compact?: boolean;
  /** Extra tabs for the editor variant. */
  tabs?: string[];
  /** App mark, shown by the plain and browser chrome. */
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

const ICON = "h-3.5 w-3.5 shrink-0";

/* ------------------------------------------------------------------------ */

function Lights({ muted = false, className = "" }: { muted?: boolean; className?: string }) {
  const tones = muted ? ["#e3d8ca", "#e3d8ca", "#e3d8ca"] : ["#ec8a7d", "#efc274", "#9cc98f"];
  return (
    <span className={`flex shrink-0 items-center gap-1.5 ${className}`} aria-hidden="true">
      {tones.map((c, i) => (
        <span key={i} className="h-[10px] w-[10px] rounded-full shadow-[inset_0_0_0_0.5px_rgba(51,48,42,0.18)]" style={{ background: c }} />
      ))}
    </span>
  );
}

function Key({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={`flex h-6 min-w-6 items-center justify-center gap-1 rounded-[5px] px-1 text-ink-soft ${
        active ? "bg-raised shadow-[0_0_0_1px_var(--o-line)]" : ""
      }`}
    >
      {children}
    </span>
  );
}

function Field({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`flex h-6 min-w-0 items-center gap-1.5 rounded-md bg-raised/80 px-2 text-[11px] text-ink-faint shadow-[0_0_0_1px_var(--o-line)] ${className}`}>
      {children}
    </span>
  );
}

function Avatars({ names }: { names: string[] }) {
  const tints = ["#f6dccd", "#e4eef6", "#e6eadb", "#f0dcca"];
  return (
    <span className="flex -space-x-1.5" aria-hidden="true">
      {names.map((n, i) => (
        <span
          key={n}
          className="flex h-5 w-5 items-center justify-center rounded-full font-display text-[8.5px] font-bold text-ink-soft ring-2 ring-[var(--mw-bar)]"
          style={{ background: tints[i % tints.length] }}
        >
          {n}
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------------ */
/* One toolbar per app.                                                     */
/* ------------------------------------------------------------------------ */

function GmailBar({ title, subtitle, url, compact }: Props) {
  return (
    <>
      {/* Safari-style row: lights, history, the address with Gmail's mark. */}
      <div className="flex items-center gap-2 px-3.5 py-2">
        <Lights />
        <span className="ml-1 flex items-center text-ink-faint" aria-hidden="true">
          <ChevronLeft className={ICON} />
          <ChevronRight className={`${ICON} opacity-50`} />
        </span>
        <Field className="mx-auto w-full max-w-[17rem] justify-center">
          <span className="h-2.5 w-3 shrink-0 rounded-[2px] border-[1.5px] border-[#c4572f]" aria-hidden="true" />
          <span className="truncate">{url ?? "mail.google.com"}</span>
        </Field>
        <Plus aria-hidden="true" className={`${ICON} text-ink-faint`} />
      </div>
      {/* Gmail's compose header. */}
      {!compact && (
        <div className="flex items-center gap-2 border-t border-line bg-[#f2e6d8] px-3.5 py-1.5">
          <span className="truncate font-display text-[11.5px] font-semibold text-ink">{title ?? "New message"}</span>
          {subtitle && <span className="hidden truncate text-[11px] text-ink-faint sm:inline">to {subtitle}</span>}
          <span className="ml-auto flex items-center gap-2 text-ink-faint" aria-hidden="true">
            <Minus className="h-3 w-3" />
            <Maximize2 className="h-3 w-3" />
            <X className="h-3 w-3" />
          </span>
        </div>
      )}
    </>
  );
}

function OutlookBar({ title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2">
      <Lights />
      <span className="ml-1 hidden items-center gap-0.5 sm:flex" aria-hidden="true">
        <Key>
          <Reply className={ICON} />
        </Key>
        <Key>
          <ReplyAll className={ICON} />
        </Key>
        <Key>
          <Forward className={ICON} />
        </Key>
        <Key>
          <Trash2 className={ICON} />
        </Key>
      </span>
      <span className="mx-auto min-w-0 truncate text-center font-display text-[11.5px] font-semibold text-ink-soft">
        {title ?? "Inbox"}
        {subtitle && <span className="font-normal text-ink-faint"> · {subtitle}</span>}
      </span>
      <Field className="hidden w-28 md:flex">
        <Search aria-hidden="true" className="h-3 w-3" />
        Search
      </Field>
    </div>
  );
}

function SlackBar({ title, subtitle, compact }: Props) {
  return (
    <>
      <div className="flex items-center gap-2 bg-[#efe3ec] px-3.5 py-2">
        <Lights />
        <span className="ml-2 flex items-center gap-1 text-[#8a6b84]" aria-hidden="true">
          <ChevronLeft className={ICON} />
          <ChevronRight className={`${ICON} opacity-50`} />
          <Clock className={ICON} />
        </span>
        <span className="mx-auto flex h-6 w-full max-w-[16rem] items-center gap-1.5 rounded-md bg-[#f8f1f6] px-2 text-[11px] text-[#8a6b84] shadow-[0_0_0_1px_#e3d0de]">
          <Search aria-hidden="true" className="h-3 w-3" />
          <span className="truncate">Search {subtitle ?? "Acme"}</span>
        </span>
        <span className="w-[58px]" aria-hidden="true" />
      </div>
      {!compact && (
        <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-2">
          <Hash aria-hidden="true" className="h-3.5 w-3.5 text-ink-soft" />
          <span className="truncate font-display text-[12.5px] font-bold text-ink">{(title ?? "general").replace(/^#\s*/, "")}</span>
          <ChevronDown aria-hidden="true" className="h-3 w-3 text-ink-faint" />
          <span className="ml-auto flex items-center gap-2">
            <Avatars names={["SK", "MO", "JP"]} />
            <Headphones aria-hidden="true" className="h-3.5 w-3.5 text-ink-faint" />
          </span>
        </div>
      )}
    </>
  );
}

function NotionBar({ title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2.5">
      <Lights muted />
      <PanelLeft aria-hidden="true" className={`${ICON} ml-1 text-ink-faint`} />
      <span className="flex min-w-0 items-center gap-1 text-[11.5px]">
        <span className="hidden truncate text-ink-faint sm:inline">{subtitle ?? "Team space"}</span>
        <span className="hidden text-ink-faint/60 sm:inline">/</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#f6dccd] text-[9px]" aria-hidden="true">
          ✎
        </span>
        <span className="truncate font-medium text-ink">{title ?? "Untitled"}</span>
      </span>
      <span className="ml-auto flex items-center gap-2.5 text-ink-faint">
        <span className="hidden font-display text-[11px] text-ink-faint sm:inline">Edited just now</span>
        <span className="font-display text-[11px] font-semibold text-ink-soft">Share</span>
        <Star aria-hidden="true" className={ICON} />
        <MoreHorizontal aria-hidden="true" className={ICON} />
      </span>
    </div>
  );
}

function DocsBar({ title, compact, app }: Props) {
  const word = app === "word";
  return (
    <>
      <div className="flex items-center gap-2.5 px-3.5 pt-2.5 pb-1.5">
        <Lights />
        <span
          className={`flex h-6 w-5 items-center justify-center rounded-[3px] font-display text-[9px] font-bold text-white ${word ? "bg-[#3d6fb0]" : "bg-[#5b8def]"}`}
          aria-hidden="true"
        >
          {word ? "W" : <AlignLeft className="h-3 w-3" />}
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block truncate font-display text-[12px] font-semibold text-ink">{title ?? "Untitled document"}</span>
          <span className="hidden gap-2.5 text-[10.5px] text-ink-faint sm:flex" aria-hidden="true">
            {(word ? ["Home", "Insert", "Layout", "Review", "View"] : ["File", "Edit", "View", "Insert", "Format", "Tools"]).map((m) => (
              <span key={m}>{m}</span>
            ))}
          </span>
        </span>
        <span className="ml-auto flex items-center gap-2">
          <Avatars names={["PR"]} />
          <span className="hidden h-6 items-center gap-1 rounded-md bg-cloud px-2 font-display text-[10.5px] font-semibold text-cloud-ink shadow-[inset_0_0_0_1px_var(--o-cloud-line)] sm:flex">
            <Lock aria-hidden="true" className="h-3 w-3" />
            Share
          </span>
        </span>
      </div>
      {!compact && (
        <div className="mx-3 mb-1.5 flex items-center gap-0.5 rounded-md bg-raised/70 px-1.5 py-0.5 shadow-[0_0_0_1px_var(--o-line)]" aria-hidden="true">
          <span className="flex h-6 items-center gap-1 px-1.5 text-[10.5px] text-ink-soft">
            {word ? "Aptos" : "Arial"} <ChevronDown className="h-3 w-3" />
          </span>
          <span className="mx-1 h-4 w-px bg-line" />
          <Key active>
            <Bold className="h-3 w-3" />
          </Key>
          <Key>
            <Italic className="h-3 w-3" />
          </Key>
          <Key>
            <Underline className="h-3 w-3" />
          </Key>
          <span className="mx-1 h-4 w-px bg-line" />
          <Key>
            <List className="h-3 w-3" />
          </Key>
          <Key>
            <Link2 className="h-3 w-3" />
          </Key>
        </div>
      )}
    </>
  );
}

function EditorBar({ title, tabs }: Props) {
  const all = [title ?? "index.ts", ...(tabs ?? [])];
  return (
    <div className="flex items-end gap-0 bg-[#f3ece2] pl-3.5">
      <Lights className="mb-2.5 mr-3" />
      {all.map((tab, i) => (
        <span
          key={tab}
          className={`flex h-8 items-center gap-1.5 border-r border-line px-3 font-mono text-[11px] ${
            i === 0 ? "bg-raised text-ink shadow-[inset_0_2px_0_0_var(--o-accent)]" : "text-ink-faint"
          }`}
        >
          <FileCode2 aria-hidden="true" className={`h-3 w-3 ${i === 0 ? "text-brand" : ""}`} />
          {tab}
          {i === 0 && <Circle aria-hidden="true" className="h-2 w-2 fill-ink-faint text-ink-faint" />}
        </span>
      ))}
      <span className="ml-auto mb-2 mr-3 flex items-center gap-2 text-ink-faint" aria-hidden="true">
        <Columns2 className={ICON} />
        <Sparkles className={ICON} />
      </span>
    </div>
  );
}

function LinearBar({ title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2">
      <Lights muted />
      <span className="ml-1 flex min-w-0 items-center gap-1.5 text-[11.5px]">
        <span className="hidden h-4 w-4 items-center justify-center rounded-[4px] bg-[#e6e1f0] font-display text-[8px] font-bold text-[#5b4f8a] sm:flex" aria-hidden="true">
          A
        </span>
        <span className="hidden text-ink-faint sm:inline">{subtitle ?? "Engineering"}</span>
        <ChevronRight aria-hidden="true" className="hidden h-3 w-3 text-ink-faint sm:block" />
        <span className="truncate font-mono text-[11px] font-medium text-ink">{title ?? "ENG-1"}</span>
      </span>
      <span className="ml-auto flex items-center gap-1.5">
        <span className="flex h-5 items-center gap-1 rounded-[5px] bg-raised px-1.5 font-display text-[10px] font-semibold text-ink-soft shadow-[0_0_0_1px_var(--o-line)]">
          <span className="h-2 w-2 rounded-full border-[1.5px] border-[#d39a3a]" aria-hidden="true" />
          In progress
        </span>
        <span className="hidden h-5 items-center rounded-[5px] bg-raised px-1.5 font-display text-[10px] font-semibold text-ink-soft shadow-[0_0_0_1px_var(--o-line)] sm:flex">
          High
        </span>
      </span>
    </div>
  );
}

function ChatBar({ title }: Props) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2">
      <Lights />
      <PanelLeft aria-hidden="true" className={`${ICON} ml-1 text-ink-faint`} />
      <span className="mx-auto flex h-6 items-center gap-1 rounded-md px-2 font-display text-[12px] font-semibold text-ink">
        {title ?? "Assistant"}
        <ChevronDown aria-hidden="true" className="h-3 w-3 text-ink-faint" />
      </span>
      <Share aria-hidden="true" className={`${ICON} text-ink-faint`} />
    </div>
  );
}

function NotesBar({ title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2">
      <Lights />
      <PanelLeft aria-hidden="true" className={`${ICON} ml-1 text-ink-faint`} />
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-[12px] font-semibold text-ink">{title ?? "Meeting notes"}</span>
        {subtitle && <span className="block truncate text-[10.5px] text-ink-faint">{subtitle}</span>}
      </span>
      <span className="ml-auto flex items-center gap-2">
        <Avatars names={["RY", "AK", "LM"]} />
        <Paperclip aria-hidden="true" className={`${ICON} hidden text-ink-faint sm:block`} />
        <AtSign aria-hidden="true" className={`${ICON} hidden text-ink-faint sm:block`} />
      </span>
    </div>
  );
}

function BrowserBar({ title, url, icon }: Props) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2">
      <Lights />
      <ChevronLeft aria-hidden="true" className={`${ICON} ml-1 text-ink-faint`} />
      <Field className="mx-auto w-full max-w-[18rem] justify-center">
        {icon ?? <Lock aria-hidden="true" className="h-3 w-3" />}
        <span className="truncate">{url ?? title ?? "oravo.ai"}</span>
      </Field>
      <Plus aria-hidden="true" className={`${ICON} text-ink-faint`} />
    </div>
  );
}

function PlainBar({ title, subtitle, icon }: Props) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2.5">
      <Lights />
      {icon && <span className="ml-1.5 flex shrink-0 items-center">{icon}</span>}
      {title && <span className="ml-1.5 truncate font-display text-[11.5px] font-semibold text-ink-soft">{title}</span>}
      {subtitle && <span className="truncate text-[11.5px] text-ink-faint">{subtitle}</span>}
    </div>
  );
}

const BARS: Record<MacApp, (p: Props) => ReactNode> = {
  gmail: GmailBar,
  outlook: OutlookBar,
  slack: SlackBar,
  notion: NotionBar,
  docs: DocsBar,
  word: DocsBar,
  editor: EditorBar,
  linear: LinearBar,
  chat: ChatBar,
  notes: NotesBar,
  browser: BrowserBar,
  plain: PlainBar,
};

/* The bar colour each app's chrome sits on, all within the warm palette. */
const BAR_BG: Record<MacApp, string> = {
  gmail: "#f3ece2",
  outlook: "#eef1f2",
  slack: "#efe3ec",
  notion: "var(--o-raised)",
  docs: "#f4efe7",
  word: "#eef0f2",
  editor: "#f3ece2",
  linear: "#f1eef3",
  chat: "var(--o-raised)",
  notes: "#f4eee5",
  browser: "#f3ece2",
  plain: "var(--o-canvas)",
};

/** Maps a free-form app name ("Gmail", "Google Docs", "VS Code") to a chrome. */
export function macAppFor(name: string): MacApp {
  const n = name.toLowerCase();
  if (/gmail|mail\b|email|superhuman|spark/.test(n)) return "gmail";
  if (/outlook/.test(n)) return "outlook";
  if (/slack|discord|teams|whatsapp|telegram|messages/.test(n)) return "slack";
  if (/notion|obsidian|confluence|coda|craft|bear/.test(n)) return "notion";
  if (/word\b|pages/.test(n)) return "word";
  if (/docs|doc\b|google docs|drive/.test(n)) return "docs";
  if (/cursor|vs ?code|code|xcode|github|terminal|jetbrains|windsurf/.test(n)) return "editor";
  if (/linear|jira|asana|trello|clickup|monday|todoist/.test(n)) return "linear";
  if (/chatgpt|claude|gemini|perplexity|copilot/.test(n)) return "chat";
  if (/note|granola|zoom|meet|calendar/.test(n)) return "notes";
  if (/chrome|safari|browser|linkedin|twitter|x\b|figma|canva|hubspot|salesforce/.test(n)) return "browser";
  return "plain";
}

export function MacWindow(props: Props) {
  const { app = "plain", children, className = "", bodyClassName = "p-4 sm:p-5" } = props;
  const Bar = BARS[app];
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-xl bg-raised shadow-[0_0_0_1px_var(--o-line),0_1px_0_0_rgba(255,255,255,0.6)_inset,0_24px_48px_-28px_rgba(51,48,42,0.4)] ${className}`}
      style={{ ["--mw-bar" as string]: BAR_BG[app] }}
    >
      <div className={`relative shrink-0 bg-[var(--mw-bar)] ${app === "notion" || app === "chat" ? "" : "border-b border-line"}`}>
        <Bar {...props} />
      </div>
      <div className={`relative flex-1 ${bodyClassName}`}>{children}</div>
    </div>
  );
}
