import { getRandomColorForCategory } from "../mappers/category";
import { HabitInfo } from "../models/habitInfo";

export const MY_HABITS: HabitInfo[] = [
  {
    id: 1,
    name: 'Read at least 10 pages per day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    id: 2,
    name: 'Walk 10 minutes every day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    id: 3,
    name: 'Meditate 3 times a day',
    color: getRandomColorForCategory('Mindfulness'),
    category: 'Mindfulness',
  },
  {
    id: 4,
    name: 'Work more',
    color: getRandomColorForCategory('Health'),
    category: 'Health',
  },
  {
    id: 5,
    name: 'Read at least 10 pages per day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    id: 6,
    name: 'Walk 10 minutes every day',
    color: getRandomColorForCategory('Lifestyle'),
    category: 'Lifestyle',
  },
  {
    id: 7,
    name: 'Meditate 3 times a day',
    color: getRandomColorForCategory('Mindfulness'),
    category: 'Mindfulness',
  },
  {
    id: 8,
    name: 'Work more',
    color: getRandomColorForCategory('Health'),
    category: 'Health',
  },
]