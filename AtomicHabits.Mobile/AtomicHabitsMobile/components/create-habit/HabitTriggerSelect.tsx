import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ColorThemeContext } from '../../context/colorThemeContext';
import { HabitInfo } from '../../models/habitInfo';
import { IconType } from '../../models/iconType';
import CustomIcon from '../Icon';
import Text from '../Text';
import HabitTriggerPicker from './HabitTriggerPicker';

interface HabitTriggerSelectProps {
  value: HabitInfo;
  onValueChanged: (value: HabitInfo | null) => void;
  label: string;
}

const HabitTriggerSelect = ({ value, onValueChanged, label }: HabitTriggerSelectProps) => {
  const { color } = useContext(ColorThemeContext);
  const [visible, setVisible] = useState(false);
  console.log(value);
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.select}>          
          <Text style={styles.text}>{value?.name ?? 'N/A'}</Text>
          {value && (
            <CustomIcon 
              icon={{ 
                name: 'checkmark-circle', 
                type: IconType.Ionicons 
              }} 
              color={color}
              size={20} />
          )}
        </TouchableOpacity>
        <View style={{ flex: 1 }}/>
      </View>
      <HabitTriggerPicker 
        visible={visible} 
        onDismiss={() => setVisible(false)} 
        onHabitSelected={onValueChanged} 
        habit={null}/>
    </View>
  )
};

export default HabitTriggerSelect;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  label: {
    fontSize: 16
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  select:  {
    flex: 2,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginTop: 4,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginRight: 12
  }
});