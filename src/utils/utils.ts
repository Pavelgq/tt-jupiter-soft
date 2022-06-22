import { SomeDataI } from "../pages/main/main"


export const getCategory = (data: SomeDataI[]): string[] => {
  const uCategory: Set<string> = new Set();
  data.forEach(el => uCategory.add(el.category));
  return Array.from(uCategory)
}