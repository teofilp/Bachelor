import React, { useContext, useEffect, useRef, useState } from "react";
import { TextInput as RnTextInput, Alert, View, StyleSheet } from "react-native";
import { ColorThemeContext } from "../../context/colorThemeContext";
import { IconType } from "../../models/iconType";
import IconButton from "../IconButton";
import Text from "../Text";
import TextInput from "../TextInput";

const EditTimeInput = ({ time, onConfirm, onDismiss, format }: any) => {
  const [hour, setHour] = useState(format(time.hour));
  const [minute, setMinute] = useState(format(time.minute));
  const minuteInput = useRef<RnTextInput>(null);
  const hoursInput = useRef<RnTextInput>(null);
  const { color } = useContext(ColorThemeContext);

  const hoursChangedHandler = (text: string) => {
    const hoursNumber = Number(text);

    if (hoursNumber > 23 || hoursNumber < 0) {
      Alert.alert('Hour must be between 0 and 23. Please try again');
      setHour('');

      return;
    }

    if (text.length == 2) {
      minuteInput.current!.focus();
    }
    setHour(text);
  }

  const minutesChangedHandler = (text: string) => {
    const minutesNumber = Number(text);

    if (minutesNumber > 59 || minutesNumber < 0) {
      Alert.alert('Minute must be between 0 and 59. Please try again');
      setMinute('');

      return;
    }

    if (text.length == 2) {
      minuteInput.current!.blur();
    }

    setMinute(text);
  }

  const handleConfirm = () => {
    onConfirm({
      hour: Number(hour),
      minute: Number(minute)
    });
    onDismiss();
  };

  useEffect(() => {
    hoursInput.current?.focus();
  }, []);

  return (
    <>
      <View>
        <TextInput
          selectTextOnFocus
          keyboardType='decimal-pad'
          maxLength={2}
          style={styles.timeTextContainer}
          onValueChanged={hoursChangedHandler}
          ref={hoursInput}
          onBlur={({ nativeEvent }) => setHour(format(Number(nativeEvent.text)))}
          value={hour} />
      </View>
      <Text style={[styles.text, styles.separator]} fontWeightStyle="bold">
        :
      </Text>
      <View>
        <TextInput
          selectTextOnFocus
          keyboardType='decimal-pad'
          maxLength={2}
          style={styles.timeTextContainer}
          ref={minuteInput}
          onValueChanged={minutesChangedHandler}
          onBlur={({ nativeEvent }) => setMinute(format(Number(nativeEvent.text)))}
          value={minute} />
      </View>
      <IconButton
        icon={{
          type: IconType.Ionicons,
          name: 'checkmark'
        }}
        style={styles.button}
        size={26}
        color={color}
        onPress={handleConfirm} />
      <IconButton
        icon={{
          type: IconType.Ionicons,
          name: 'close'
        }}
        style={styles.button}
        size={26}
        color='red'
        onPress={onDismiss} />
    </>
  );
};

export default EditTimeInput;

const styles = StyleSheet.create({
  separator: {
    paddingHorizontal: 8,
    fontSize: 18
  },
  text: {
    fontSize: 16,
  },
  timeTextContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#eee',
    letterSpacing: 2,
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: '#eee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  }
});