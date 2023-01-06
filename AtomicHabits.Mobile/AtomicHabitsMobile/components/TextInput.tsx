import React from 'react';
import { View, TextInput as RnTextInput, TextInputProps as RnTextInputProps, StyleSheet} from "react-native"
import Text from "./Text"

interface TextInputProps extends Omit<RnTextInputProps, "onChangeText"> {
  label: string;
  onValueChanged: (val: string) => void;
}

const TextInput = ({ label, style, onValueChanged, ...rest }: TextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
      <View style={styles.row}>
        <RnTextInput onChangeText={onValueChanged} {...rest} style={[styles.input, style]} />
      </View>
    </View>
  )
}

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
    marginTop: 4,
    minWidth: 300,
    fontSize: 16
  },
  label: {
    fontSize: 16
  },
  row: {
    flexDirection: 'row'
  }
});