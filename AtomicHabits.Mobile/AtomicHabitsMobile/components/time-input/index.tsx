import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Time } from '../../models/time';
import Text from "../Text";
import EditTimeInput from './EditTimeInput';
import ReadonlyTimeInput from './ReadonlyTimeInput';

type Mode = 'display' | 'edit';

const renderTime = (value: number) => value < 10 ? `0${value}` : value.toString();

interface TimeInputProps {
  label: string;
  value: Time;
  onValueChanged: (time: Time) => void;
  style?: any;
}

const TimeInput = ({ value, onValueChanged, label, style }: TimeInputProps) => {
  const [mode, setMode] = useState<Mode>('display');

  return (
    <View style={style}>
      <View style={styles.timeContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.timeContainerInner}>
          {mode == 'edit' ? (
            <EditTimeInput
              format={renderTime}
              onConfirm={onValueChanged}
              onDismiss={() => setMode('display')}
              time={value} />
          ) : (
            <ReadonlyTimeInput format={renderTime} time={value} onEdit={() => setMode('edit')} />
          )}
        </View>
      </View>
    </View>
  );
};

export default TimeInput;

const styles = StyleSheet.create({
  timeContainer: {
    justifyContent: 'center',
    flex: 1
  },
  label: {
    fontSize: 16,
    marginBottom: 4
  },
  timeContainerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
});