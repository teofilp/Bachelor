import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { IconType } from '../models/iconType';

export const getIcon = (type: IconType) => ({
  [IconType.FontAwesome5]: FontAwesome5,
  [IconType.Ionicons]: Ionicons,
  [IconType.MaterialComunityIcons]: MaterialCommunityIcons,
  [IconType.MaterialIcons]: MaterialIcons
})[type];