import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import katex from "katex";

const notesDir = path.join(process.cwd(), "content/notes");

export type NoteMeta = {
  slug: string;
  title: string;
};

export type Note = NoteMeta & { html: string };

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function resolveWikilinks(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, name) => {
    return `[${name}](/notes/${slugify(name)})`;
  });
}

function buildSlugMap(): Map<string, string> {
  const map = new Map<string, string>();
  if (!fs.existsSync(notesDir)) return map;
  for (const file of fs.readdirSync(notesDir)) {
    if (file.endsWith(".md")) {
      map.set(slugify(file.replace(/\.md$/, "")), file);
    }
  }
  return map;
}

const PH = (i: number) => `XMATHX${i}XMATHX`;

function extractMath(content: string): { processed: string; blocks: string[] } {
  const blocks: string[] = [];

  // display math $$...$$
  let processed = content.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
    const html = `<div class="math-display">${katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false })}</div>`;
    const i = blocks.length;
    blocks.push(html);
    return `\n\n${PH(i)}\n\n`;
  });

  // inline math $...$
  processed = processed.replace(/\$([^$\n]+?)\$/g, (_, tex) => {
    const html = katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false });
    const i = blocks.length;
    blocks.push(html);
    return PH(i);
  });

  return { processed, blocks };
}

function restoreMath(html: string, blocks: string[]): string {
  return blocks.reduce((acc, block, i) => {
    const ph = PH(i);
    // marked may wrap block-level placeholders in <p> tags
    return acc
      .replace(new RegExp(`<p>\\s*${ph}\\s*<\\/p>`, "g"), block)
      .replace(new RegExp(ph, "g"), block);
  }, html);
}

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(notesDir)) return [];
  return fs
    .readdirSync(notesDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const rawName = file.replace(/\.md$/, "");
      const slug = slugify(rawName);
      const raw = fs.readFileSync(path.join(notesDir, file), "utf8");
      const { data } = matter(raw);
      const title = (data.title as string) ?? rawName;
      return { slug, title };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getNote(slug: string): Promise<Note | null> {
  const slugMap = buildSlugMap();
  const filename =
    slugMap.get(slug) ?? slugMap.get(slugify(decodeURIComponent(slug)));
  if (!filename) return null;

  const filePath = path.join(notesDir, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const title = (data.title as string) ?? filename.replace(/\.md$/, "");

  const withWikilinks = resolveWikilinks(content);
  const { processed, blocks } = extractMath(withWikilinks);
  const markedHtml = String(await marked(processed));
  const html = restoreMath(markedHtml, blocks);

  return { slug, title, html };
}
