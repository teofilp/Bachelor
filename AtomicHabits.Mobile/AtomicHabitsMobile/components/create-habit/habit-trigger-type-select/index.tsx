import React from "react";
import { StyleSheet, View } from "react-native"
import { HabitTrigger } from "../../../models/habitTrigger";
import TileSelect from "../TileSelect";

interface HabitFrequencyProps {
  value: HabitTrigger;
  label: string;
  onValueChanged: (value: HabitTrigger) => void;
}

const items = [
  {
    value: HabitTrigger.Reminder,
    label: 'Reminder'
  },
  {
    value: HabitTrigger.Habit,
    label: 'Habit'
  }
];

const HabitTriggerTypeSelect = ({ value, label, onValueChanged } : HabitFrequencyProps) => (
  <View style={styles.root}>
    <TileSelect fillEmptyItemsCount={1} items={items} label={label} value={value} onValueChanged={onValueChanged}/>
  </View>
)

export default HabitTriggerTypeSelect;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});