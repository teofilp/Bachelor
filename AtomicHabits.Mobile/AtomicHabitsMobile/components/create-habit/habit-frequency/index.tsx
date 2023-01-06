import React, { useContext, useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { HabitFrequency } from "../../../models/habitFrequency";
import Text from "../../Text";
import DaySelector from "./DaysSelector";
import { getWeekDays } from "../../../utils/weekDays";
import { ColorThemeContext } from "../../../context/colorThemeContext";

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
        itemStyle={{ margin: 4}}
        items={Array.from(new Array(31).keys()).map(x => x + 1)} 
        itemFormatter={item => item < 10 ? `0${item}` : item} />
    )
  };

  return mapper[activeFrequency];
};

interface HabitFrequencyProps {
  value: HabitFrequency;
  label: string;
  onValueChanged: (value: HabitFrequency) => void;
}

const HabitFrequencyComponent = ({ value, label, onValueChanged } : HabitFrequencyProps) => {
  const { color } = useContext(ColorThemeContext);
  
  const getfontWeightStyle = (freq: HabitFrequency) => {
    if (freq == value) return 'bold';
  }
  const getContainerStyle = (freq: HabitFrequency) => freq == value && { backgroundColor: color };

  const getTextStyle = (freq: HabitFrequency) => freq == value && styles.activeText;

  const Selector = useMemo(() => getSpecificFrequencySelector(value), [value]);

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionsList}>
        <TouchableOpacity 
          style={[styles.optionContainer, getContainerStyle(HabitFrequency.Daily)]} 
          onPress={() => onValueChanged(HabitFrequency.Daily)}>
          <Text 
            fontWeightStyle={getfontWeightStyle(HabitFrequency.Daily)}
            style={getTextStyle(HabitFrequency.Daily)}>
              Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionContainer, { marginHorizontal: 16 }, getContainerStyle(HabitFrequency.Weekly)]}
          onPress={() => onValueChanged(HabitFrequency.Weekly)}>
          <Text 
            fontWeightStyle={getfontWeightStyle(HabitFrequency.Weekly)}
            style={getTextStyle(HabitFrequency.Weekly)}>
              Weekly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionContainer, getContainerStyle(HabitFrequency.Monthly)]}
          onPress={() => onValueChanged(HabitFrequency.Monthly)}>
         <Text 
            fontWeightStyle={getfontWeightStyle(HabitFrequency.Monthly)}
            style={getTextStyle(HabitFrequency.Monthly)}>
              Monthly
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 12 }}>
        <Selector/>
      </View>
    </View>
  )
}

export default HabitFrequencyComponent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  optionsList: {
    flexDirection: 'row'
  },
  optionContainer: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeText: {
    color: 'white',
  },
  label: {
    fontSize: 16
  }
});