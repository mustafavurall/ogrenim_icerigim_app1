import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default function Input({ label, textInputConfig, style, invalid }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    color: '#FF8C00',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFB300',
    padding: 6,
    borderRadius: 10,
    fontSize: 24,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: 'red',
  },
  invalidInput: {
    backgroundColor: 'red',
  },
});
