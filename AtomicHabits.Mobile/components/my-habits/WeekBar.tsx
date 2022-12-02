import { useState } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/color";
import { getWeekDays } from "../../utils/weekDays"
import Text from "../Text";

interface WeekBarProps {
  onDayChange: (currentDay: number) => void;
  activeDay: number;
  style?: any;
}

const WeekBar = ({ activeDay, onDayChange, style = {} }: WeekBarProps) => {
  const [weekDays] = useState(getWeekDays());
  const today = new Date().getDay();

  const renderItem = (dayName: string, index: number) => (
    <TouchableOpacity onPress={() => onDayChange(index)} key={dayName}>
      <View
        style={[
          styles.dayItemContainer, 
          style, 
          index == activeDay && styles.activeDayItem, 
          index == today && styles.today
        ]} >
        <Text
          fontWeightStyle={index == activeDay || index == today ? 'bold' : 'regular'}
          style={[styles.dayText, index == activeDay && styles.activeDayText]} >
          {dayName[0]}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      {weekDays.map(renderItem)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 16
  },
  dayItemContainer: {
    width: 42,
    height: 42,
    borderRadius: 8,
    borderColor: Colors.DarkCornflowerBlue,
    borderWidth: 1.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayText: {
    color: Colors.DarkCornflowerBlue,
    fontSize: 20,
  },
  activeDayItem: {
    backgroundColor: Colors.DarkCornflowerBlue
  },
  activeDayText: {
    color: Colors.MintCream
  },
  today: {
    borderWidth: 2.5
  }
});

export default WeekBar;