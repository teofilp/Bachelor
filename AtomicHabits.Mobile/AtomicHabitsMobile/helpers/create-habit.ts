import Colors from "../constants/color";
import { HabitFrequency } from "../models/habitFrequency";
import { HabitTrigger } from "../models/habitTrigger";

export const getDefaultHabit = () => ({
  name: '',
  description: '',
  icon: null as any,
  color: Colors.MaximumPurple,
  frequency: {
    type: HabitFrequency.Daily,
    weekDays: [],
    monthDays: []
  },
  trigger: HabitTrigger.Reminder,
  triggerSource: null,
  reminder: {
    time: {
      minute: new Date().getMinutes(),
      hour: new Date().getHours()
    },
    title: ''
  }
});