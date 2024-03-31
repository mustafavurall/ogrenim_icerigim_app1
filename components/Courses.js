import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'

const COURSES = [
  {
    id: '1',
    description: 'Nesne Tabanlı Programlama',
    amount: 119,
    date: new Date('2023-01-05'),
  },
  {
    id: '2',
    description: 'java Programlama',
    amount: 69,
    date: new Date('2023-04-10'),
  },
  {
    id: '3',
    description: 'Angular',
    amount: 79,
    date: new Date('2022-12-08'),
  },
  {
    id: '4',
    description: 'Bootstrap 5',
    amount: 99,
    date: new Date('2022-10-10'),
  },
  {
    id: '5',
    description: 'React Js',
    amount: 69,
    date: new Date('2023-05-20'),
  },
  {
    id: '6',
    description: 'React Native',
    amount: 79,
    date: new Date('2023-07-30'),
  },
  {
    id: '7',
    description: 'Javascript',
    amount: 49,
    date: new Date('2023-06-12'),
  },
  {
    id: '8',
    description: 'Komple Web',
    amount: 129,
    date: new Date('2021-10-22'),
  },
  {
    id: '9',
    description: 'Frontend',
    amount: 149,
    date: new Date('2022-11-25'),
  },
];

export default function Course({coursesPeriod}) {
  //iki tane kapsayıcı olmaz
    return (
<View style={styles.container}>
    <CoursesSummary courses={COURSES} periodName={coursesPeriod}/>
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