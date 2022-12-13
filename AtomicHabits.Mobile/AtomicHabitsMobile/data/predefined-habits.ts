import { getRandomColorForCategory } from "../mappers/category";
import { HabitInfo } from "../models/habitInfo";
import { IconType } from "../models/iconType";

export const PREDEFINED_HABITS: HabitInfo[] = [
  {
    category: 'Health',
    name: 'Drink water',
    color: getRandomColorForCategory('Health'),
    icon: {
      name: 'ios-water',
      type: IconType.Ionicons
    }
  },
  {
    category: 'Health',
    name: 'Eat fruits',
    color: getRandomColorForCategory('Health'),
    icon: {
      name: 'fruit-cherries',
      type: IconType.MaterialComunityIcons
    }
  },
  {
    category: 'Health',
    name: 'Sleep early',
    color: getRandomColorForCategory('Health'),
    icon: {
      name: 'sleep',
      type: IconType.MaterialComunityIcons
    }
  },
  {
    category: 'Health',
    name: 'Workout',
    color: getRandomColorForCategory('Health'),
    icon: {
      name: 'ios-barbell',
      type: IconType.Ionicons
    }
  },
  {
    category: 'Lifestyle',
    name: 'Call parents',
    color: getRandomColorForCategory('Lifestyle'),
    icon: {
      name: 'heart-sharp',
      type: IconType.Ionicons
    }
  },
  {
    category: 'Lifestyle',
    name: 'Track expenses',
    color: getRandomColorForCategory('Lifestyle'),
    icon: {
      name: 'track-changes',
      type: IconType.MaterialIcons
    }
  },
  {
    category: 'Lifestyle',
    name: 'Save money',
    color: getRandomColorForCategory('Lifestyle'),
    icon: {
      name: 'coins',
      type: IconType.FontAwesome5
    }
  },
  {
    category: 'Mindfulness',
    name: 'Meditate',
    color: getRandomColorForCategory('Mindfulness'),
    icon: {
      name: 'think-peaks',
      type: IconType.FontAwesome5
    }
  },
  {
    category: 'Mindfulness',
    name: 'Breathe',
    color: getRandomColorForCategory('Mindfulness'),
    icon: {
      name: 'flower',
      type: IconType.Ionicons
    }
  },
]