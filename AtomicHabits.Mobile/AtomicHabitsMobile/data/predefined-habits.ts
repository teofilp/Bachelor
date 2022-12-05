import { getColorForCategory } from "../mappers/category";
import { HabitInfo } from "../models/habitInfo";
import { IconType } from "../models/iconType";

export const PREDEFINED_HABITS: HabitInfo[] = [
  {
    category: 'Health',
    name: 'Drink water',
    color: getColorForCategory('Health'),
    icon: 'ios-water',
    iconType: IconType.Ionicons
  },
  {
    category: 'Health',
    name: 'Eat fruits',
    color: getColorForCategory('Health'),
    icon: 'fruit-cherries',
    iconType: IconType.MaterialComunityIcons
  },
  {
    category: 'Health',
    name: 'Sleep early',
    color: getColorForCategory('Health'),
    icon: 'sleep',
    iconType: IconType.MaterialComunityIcons
  },
  {
    category: 'Health',
    name: 'Workout',
    color: getColorForCategory('Health'),
    icon: 'ios-barbell',
    iconType: IconType.Ionicons
  },
  {
    category: 'Lifestyle',
    name: 'Call parents',
    color: getColorForCategory('Lifestyle'),
    icon: 'heart-sharp',
    iconType: IconType.Ionicons
  },
  {
    category: 'Lifestyle',
    name: 'Track expenses',
    color: getColorForCategory('Lifestyle'),
    icon: 'track-changes',
    iconType: IconType.MaterialIcons
  },
  {
    category: 'Lifestyle',
    name: 'Save money',
    color: getColorForCategory('Lifestyle'),
    icon: 'coins',
    iconType: IconType.FontAwesome5
  },
  {
    category: 'Mindfulness',
    name: 'Meditate',
    color: getColorForCategory('Mindfulness'),
    icon: 'think-peaks',
    iconType: IconType.FontAwesome5
  },
  {
    category: 'Mindfulness',
    name: 'Breathe',
    color: getColorForCategory('Mindfulness'),
    icon: 'flower',
    iconType: IconType.Ionicons
  },
]