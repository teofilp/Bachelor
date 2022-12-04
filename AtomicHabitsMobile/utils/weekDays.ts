export const getWeekDays = (locale: string = "en-US") => {
  let baseDate = new Date(Date.UTC(2017, 0, 2));
  let weekDays = [];

  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
    baseDate.setDate(baseDate.getDate() + 1);
  }

  var [sunday] = weekDays.splice(weekDays.length - 1, 1);
  
  weekDays = [sunday, ...weekDays];
  
  return weekDays;
}