import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CoursesSummary({periodName,courses}) 
{

     const coursesSum= courses.reduce((sum,course)=> {
        return sum + course.amount // değerleri toplayacak

     },0)




  return (//bastırma
    <View style={styles.container}>
      <Text style={styles.title}>{periodName}</Text>
      <Text style={styles.cost}>{coursesSum + '₺'}</Text>

    </View>
  )
}
//css özellikler
const styles = StyleSheet.create({
    container:{
flexDirection: 'row',
justifyContent:'space-between',
alignItems:'center', // dikey hizalama
backgroundColor:'turquoise',
padding: 10,
borderRadius: 14,

    },
    title:{
        color:'white',
        fontSize: 20,
    },
    cost:{
        color:'blue',
        fontSize: 25,
        fontWeigh: 'bold',

    },
})