import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ColorThemeContext } from "../../context/colorThemeContext";
import { IconType } from "../../models/iconType";
import { Time } from "../../models/time";
import IconButton from "../IconButton";
import Text from "../Text";

interface ReadonlyTimeInputProps {
  time: Time;
  onEdit: () => void;
  format: (value: number) => string;
}

const ReadonlyTimeInput = ({ time, onEdit, format }: ReadonlyTimeInputProps) => {
  const { color } = useContext(ColorThemeContext);

  return (
    <>
      <View style={styles.timeTextContainer}>
        <Text style={[styles.text, styles.timeText]}>
          {format(time.hour)}
        </Text>
      </View>
      <Text style={[styles.text, styles.separator]} fontWeightStyle="bold">
        :
      </Text>
      <View style={styles.timeTextContainer}>
        <Text style={[styles.text, styles.timeText]}>
          {format(time.minute)}
        </Text>
      </View>
      <IconButton
        icon={{
          type: IconType.Ionicons,
          name: 'hammer'
        }}
        color={color}
        size={20}
        style={styles.button}
        onPress={onEdit}
      />
    </>
  );
};

export default ReadonlyTimeInput;

const styles = StyleSheet.create({
  separator: {
    paddingHorizontal: 8,
    fontSize: 18
  },
  text: {
    fontSize: 16,
  },
  timeText: {
    letterSpacing: 2
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