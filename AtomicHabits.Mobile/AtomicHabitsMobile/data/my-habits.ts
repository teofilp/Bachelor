import { getColorForCategory } from "../mappers/category";
import { HabitInfo } from "../models/habitInfo";
import { IconType } from "../models/iconType";

export const MY_HABITS: HabitInfo[] = [
  {
    name: 'Read at least 10 pages per day',
    color: getColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Walk 10 minutes every day',
    color: getColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Meditate 3 times a day',
    color: getColorForCategory('Mindfulness'),
    category: 'Mindfulness',
  },
  {
    name: 'Work more',
    color: getColorForCategory('Health'),
    category: 'Health',
  },
  {
    name: 'Read at least 10 pages per day',
    color: getColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Walk 10 minutes every day',
    color: getColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Meditate 3 times a day',
    color: getColorForCategory('Mindfulness'),
    category: 'Mindfulness',
  },
  {
    name: 'Work more',
    color: getColorForCategory('Health'),
    category: 'Health',
  },
]