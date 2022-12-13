import { getRandomColorForCategory } from "../mappers/category";
import { HabitInfo } from "../models/habitInfo";
import { IconType } from "../models/iconType";

export const MY_HABITS: HabitInfo[] = [
  {
    name: 'Read at least 10 pages per day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Walk 10 minutes every day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Meditate 3 times a day',
    color: getRandomColorForCategory('Mindfulness'),
    category: 'Mindfulness',
  },
  {
    name: 'Work more',
    color: getRandomColorForCategory('Health'),
    category: 'Health',
  },
  {
    name: 'Read at least 10 pages per day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Walk 10 minutes every day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    name: 'Meditate 3 times a day',
    color: getRandomColorForCategory('Mindfulness'),
    category: 'Mindfulness',
  },
  {
    name: 'Work more',
    color: getRandomColorForCategory('Health'),
    category: 'Health',
  },
]