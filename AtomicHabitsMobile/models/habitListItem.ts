import { Category } from "./category";

export interface HabitListItem {
  name: string;
  color?: string;
  icon?: string;
  category: Category;
}