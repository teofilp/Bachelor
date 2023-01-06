import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import Colors from "../../constants/color";
import { HabitFrequency } from "../../models/habitFrequency";
import Text from "../Text";

const getSpecificFrequencySelector = (activeFrequency: HabitFrequency) => {
  const mapper = {
    [HabitFrequency.Daily]: () => <View/>,
    [HabitFrequency.Weekly]: () => <Text>Weekly</Text>,
    [HabitFrequency.Monthly]: () => <Text>Monthly</Text>
  };

  return mapper[activeFrequency];
};


interface HabitFrequencyProps {
  value: HabitFrequency;
  label: string;
  onValueChanged: (value: HabitFrequency) => void;
}

const HabitFrequencyComponent = ({ value, label, onValueChanged } : HabitFrequencyProps) => {
  const getfontWeightStyle = (freq: HabitFrequency) => {
    if (freq == value) return 'bold';
  }
  const getContainerStyle = (freq: HabitFrequency) => freq == value && styles.activeOptionContainer;
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
      <Selector/>
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
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeOptionContainer: {
    backgroundColor: Colors.MaximumPurple,
  },
  activeText: {
    color: 'white',
  },
  label: {
    fontSize: 16
  }
});