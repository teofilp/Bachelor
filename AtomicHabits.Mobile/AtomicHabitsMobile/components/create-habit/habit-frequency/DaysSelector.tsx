import React, { useContext, useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../../Text';
import { useFormContext } from 'react-hook-form'; 
import { ColorThemeContext } from '../../../context/colorThemeContext';

interface DaySelectorProps {
  name: string;
  items: any[];
  itemFormatter: (item: any) => string;
  listContainerStyle?: any;
  itemStyle?: any;
  fillEmptyItemsCount?: number;
}

const DaySelector = ({ name, items, itemFormatter, listContainerStyle, itemStyle, fillEmptyItemsCount = 0 }: DaySelectorProps) => {
  const { watch, setValue } = useFormContext();
  const selectedDays = watch(`frequency.${name}`);
  const { color } = useContext(ColorThemeContext);

  const daySelected = (dayIndex: number) => selectedDays.includes(dayIndex);

  const toggleDay = (dayIndex: number) => {
    if (!selectedDays.includes(dayIndex)) {
      setValue(`frequency.${name}`, [...selectedDays, dayIndex]);
      return;
    }

    setValue(`frequency.${name}`, selectedDays.filter((x: number) => x !== dayIndex));
  }

  const padding = useMemo(() => {
      return Array.from(new Array(fillEmptyItemsCount).keys())
        .map((_, index) => <View key={index} style={[styles.dayContainer, { opacity: 0 }]} />)
  }, [fillEmptyItemsCount]);

  return (
    <View style={styles.root}>
      <Text style={styles.label}>Pick days</Text>
      <View style={[styles.daysList, listContainerStyle]}>
        {items.map((day, index) => {
          const isDaySelected = daySelected(index);
          return (
            <TouchableOpacity
              key={day} 
              style={[
                styles.dayContainer, 
                itemStyle,
                isDaySelected && {
                  backgroundColor: color
                }
              ]} 
              onPress={() => toggleDay(index)}>
              <Text 
                fontWeightStyle={isDaySelected && 'bold'}
                style={[
                  styles.label, 
                  isDaySelected && styles.activeLabel
                ]}>
                  {itemFormatter(day)}
              </Text>
            </TouchableOpacity>
          );
        })}
        {padding}
      </View>
    </View>
  );
};

export default DaySelector;

const styles = StyleSheet.create({ 
  root: {
    width: '100%'
  },
  daysList: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    flex: 1,
  },
  dayContainer: {
    backgroundColor: '#eee',
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  label: {
    fontSize: 16
  },
  activeLabel: {
    color: 'white',
  }
});
