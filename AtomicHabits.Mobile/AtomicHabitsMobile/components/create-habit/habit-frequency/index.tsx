import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native"
import { HabitFrequency } from "../../../models/habitFrequency";
import DaySelector from "./DaysSelector";
import { getWeekDays } from "../../../utils/weekDays";
import TileSelect from "../TileSelect";

const getSpecificFrequencySelector = (activeFrequency: HabitFrequency) => {
  const mapper = {
    [HabitFrequency.Daily]: () => <View/>,
    [HabitFrequency.Weekly]: () => (
      <DaySelector 
        name='weekDays' 
        items={getWeekDays()} 
        itemFormatter={item => item[0]} />
    ),
    [HabitFrequency.Monthly]: () => (
      <DaySelector 
        name='monthDays'
        fillEmptyItemsCount={4}
        listContainerStyle={{
          flexWrap: 'wrap'
        }}
        itemStyle={{ margin: 4 }}
        items={Array.from(new Array(31).keys()).map(x => x + 1)} 
        itemFormatter={item => item < 10 ? `0${item}` : item} />
    )
  };

  return mapper[activeFrequency];
};

const items = [
  {
    label: 'Daily',
    value: HabitFrequency.Daily
  },
  {
    label: 'Weekly',
    value: HabitFrequency.Weekly
  },
  {
    label: 'Monthly',
    value: HabitFrequency.Monthly
  },
]

interface HabitFrequencyProps {
  value: HabitFrequency;
  label: string;
  onValueChanged: (value: HabitFrequency) => void;
}

const HabitFrequencyComponent = ({ value, label, onValueChanged } : HabitFrequencyProps) => {
  const Selector = useMemo(() => getSpecificFrequencySelector(value), [value]);

  return (
    <View style={styles.root}>
      <TileSelect items={items} label={label} value={value} onValueChanged={onValueChanged}>
        <Selector />
      </TileSelect>
    </View>
  )
}

export default HabitFrequencyComponent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});