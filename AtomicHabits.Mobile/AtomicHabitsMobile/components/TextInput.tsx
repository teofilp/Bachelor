import React, { forwardRef } from 'react';
import { View, TextInput as RnTextInput, TextInputProps as RnTextInputProps, StyleSheet } from "react-native"
import Text from "./Text"

interface TextInputProps extends Omit<RnTextInputProps, "onChangeText"> {
  label?: string;
  onValueChanged: (val: string) => void;
  minWidth?: number;
  inputStyle?: any;
}

const TextInput = forwardRef<RnTextInput, TextInputProps>(({ label, style, onValueChanged, value, minWidth = 0, inputStyle, ...rest }: TextInputProps, ref) => (
  <View style={[styles.inputContainer, style]}>
    {label && (
      <View style={styles.row}>
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
    )}
    <View style={styles.row}>
      <RnTextInput
        {...rest}
        ref={ref as any}
        defaultValue={value}
        onBlur={({ nativeEvent }) => onValueChanged(nativeEvent.text)}
        style={[styles.input, { minWidth }, inputStyle]} />
    </View>
  </View>
));

export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#eee',
    fontSize: 16
  },
  label: {
    fontSize: 16
  },
  row: {
    flexDirection: 'row'
  }
});