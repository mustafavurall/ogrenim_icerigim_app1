import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'



export default function Course({coursesPeriod ,courses,nullText}) {
 let content = <Text style={styles.alert}>{nullText}</Text>
 
 if(courses.length>0){

content=    <CoursesList courses={courses} />

 }
 
 
 
  //iki tane kapsayıcı olmaz
    return (
<View style={styles.container}>
    <CoursesSummary courses={courses} periodName={coursesPeriod}/>
   {content}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{// tüm alanı kaplasın diye
    flex: 1,
    paddingHorizontal :25,
    paddingTop: 25,
  },

  alert:{
fontsize:16,
textAlign:'center',
marginTop: 30,


  }
})