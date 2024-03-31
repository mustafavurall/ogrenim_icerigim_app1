import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'

export default function Course({coursesPeriod}) {
  //iki tane kapsayıcı olmaz
    return (
<View style={styles.container}>
    <CoursesSummary periodName={coursesPeriod}/>
    <CoursesList/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{// tüm alanı kaplasın diye
    flex: 1,
    paddingHorizontal :25,
    paddingTop: 25,
  },
})