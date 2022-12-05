import { HabitInfo } from "../../models/habitInfo";

export const getColumns = (items: HabitInfo[]) => items.reduce<HabitInfo[][]>((list, current, index) => {
  var pushIndex = index % 2 == 0 ? 0 : 1;
  list[pushIndex].push(current);
  return list;
}, [[], []]);