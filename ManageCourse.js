import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';


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

function deleteCourse(){ //hangi ekrandan geldiyse oraya gidecek
  navigation.goBack();
}





  return (
    <View style={styles.container}>
      {isEditing && ( <View style={styles.deleteContainer}> <FontAwesome5 name="trash" size={40} color="black" onPress={deleteCourse} />
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  padding: 25,
},
deleteContainer:{
  alignItems:'center',
  borderTopWidth:2,
  borderTopColor:'blue',
  paddingTop:10,
  marginTop:16,
},

});