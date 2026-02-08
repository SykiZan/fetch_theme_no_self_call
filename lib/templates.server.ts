import { cache } from "react";
import { templates } from "@/lib/templates.data";

export type ThemeName = (typeof templates)[number]["key"];
export type ThemeConfig = (typeof templates)[number];

export const getTemplates = cache(async () => {
  return templates;
});

export async function getTemplateByKey(key?: string | null) {
  const list = await getTemplates();
  return list.find((t) => t.key === key) ?? list[0];
}
