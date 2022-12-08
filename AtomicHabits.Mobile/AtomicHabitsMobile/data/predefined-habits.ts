import { getColorForCategory } from "../mappers/category";
import { HabitInfo } from "../models/habitInfo";
import { IconType } from "../models/iconType";

export const PREDEFINED_HABITS: HabitInfo[] = [
  {
    category: 'Health',
    name: 'Drink water',
    color: getColorForCategory('Health'),
    icon: {
      name: 'ios-water',
      type: IconType.Ionicons
    }
  },
  {
    category: 'Health',
    name: 'Eat fruits',
    color: getColorForCategory('Health'),
    icon: {
      name: 'fruit-cherries',
      type: IconType.MaterialComunityIcons
    }
  },
  {
    category: 'Health',
    name: 'Sleep early',
    color: getColorForCategory('Health'),
    icon: {
      name: 'sleep',
      type: IconType.MaterialComunityIcons
    }
  },
  {
    category: 'Health',
    name: 'Workout',
    color: getColorForCategory('Health'),
    icon: {
      name: 'ios-barbell',
      type: IconType.Ionicons
    }
  },
  {
    category: 'Lifestyle',
    name: 'Call parents',
    color: getColorForCategory('Lifestyle'),
    icon: {
      name: 'heart-sharp',
      type: IconType.Ionicons
    }
  },
  {
    category: 'Lifestyle',
    name: 'Track expenses',
    color: getColorForCategory('Lifestyle'),
    icon: {
      name: 'track-changes',
      type: IconType.MaterialIcons
    }
  },
  {
    category: 'Lifestyle',
    name: 'Save money',
    color: getColorForCategory('Lifestyle'),
    icon: {
      name: 'coins',
      type: IconType.FontAwesome5
    }
  },
  {
    category: 'Mindfulness',
    name: 'Meditate',
    color: getColorForCategory('Mindfulness'),
    icon: {
      name: 'think-peaks',
      type: IconType.FontAwesome5
    }
  },
  {
    category: 'Mindfulness',
    name: 'Breathe',
    color: getColorForCategory('Mindfulness'),
    icon: {
      name: 'flower',
      type: IconType.Ionicons
    }
  },
]