import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'

export default function Input({textInputConfig}) {
  return (
    <View>
      <Text>Input</Text>
      <TextInput {...textInputConfig}/>
    </View>
  )
}

const styles = StyleSheet.create({})