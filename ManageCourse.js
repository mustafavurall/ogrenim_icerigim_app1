import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { CoursesContext } from '../store/coursesContext';
import CourseForm from '../components/CourseForm';


export default function ManageCourse({route, navigation}) {

  const coursesContext = useContext(CoursesContext);
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
  
  coursesContext.deleteCourse(courseId);
  navigation.goBack();

}
function cancelHandler(){ //hangi ekrandan geldiyse oraya gidecek
  navigation.goBack();
}


function addOrUpdateHandler(){// duruma göre contexte gönderme

  if(isEditing){
    coursesContext.updateCourse(courseId,{
      description:'Güncelleme Kurs' ,
      amount:299,
      date:new Date(),
    });

  }
  else{
    coursesContext.addCourse({
      description:'Eklenen Kurs' ,
      amount:299,
      date:new Date(),
    });
  }


navigation.goBack();
  

}




  return ( //butonlarım burada
    <View style={styles.container}>

 <CourseForm
 buttonLabel={isEditing ? 'Güncelle' : 'Ekle'}
 addOrUpdateHandler={addOrUpdateHandler}
 cancelHandler={cancelHandler} //props fonksiyonu tetikliyor
 />






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