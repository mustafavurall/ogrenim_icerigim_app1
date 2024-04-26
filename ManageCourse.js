import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';



export default function ManageCourse({route, navigation}) {
  const courseId=route.params?.courseId;
  let isEditing = false;
  
  if(courseId)
  {
    isEditing=true
  }
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing?'Kursu Güncelle':'Kurs Ekle',
    })

  },[navigation,isEditing]);
  return (
    <View>
      <Text>ManageCourse</Text>
    </View>
  );
}

const styles = StyleSheet.create({});