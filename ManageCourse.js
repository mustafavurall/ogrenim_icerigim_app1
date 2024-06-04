import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState, useContext, useLayoutEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { CoursesContext } from '../store/coursesContext';
import CourseForm from '../components/CourseForm';
import { storeCourse, updateCourse,deleteCourseHttp } from '../helper/http';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorText from '../components/ErrorText';


export default function ManageCourse({route, navigation}) {
const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState();
  const coursesContext = useContext(CoursesContext)
  const courseId=route.params?.courseId;
  let isEditing = false;


const selectedCourse=coursesContext.courses.find(
  (course) => course.id===courseId)

  
  if(courseId)
  {
    isEditing=true
  }
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing?'Kursu Güncelle':'Kurs Ekle',
    })

  },[navigation,isEditing]);

async function deleteCourse(){ //hangi ekrandan geldiyse oraya gidecek
  setIsSubmitting(true);
  setError(null);


  try {
    coursesContext.deleteCourse(courseId);
    await deleteCourseHttp(courseId);
    navigation.goBack();
  } catch (error) {
    setError('Kursları Silemedik!');
    setIsSubmitting(false);


  }
  

}
if(error && !isSubmitting){
  return<ErrorText message={error}/>;
function cancelHandler(){ //hangi ekrandan geldiyse oraya gidecek
  navigation.goBack();
}
 

async function addOrUpdateHandler(courseData){// duruma göre contexte gönderme


  setIsSubmitting(true);
  setError(null);

try {
  if(isEditing){
    coursesContext.updateCourse(courseId, courseData);

    await updateCourse(courseId, courseData);

  }
  else{
  const id= await  storeCourse(courseData);
    coursesContext.addCourse({...courseData,id:id});
  }


navigation.goBack();
  
} catch (error) {
  
}
setError('Kurslar Eklemede veya Güncellemede Problem Var!');
setIsSubmitting(false);

}

if (isSubmitting){
  return <LoadingSpinner/>;
}




  return ( //butonlarım burada
    <View style={styles.container}>

 <CourseForm
 buttonLabel={isEditing ? 'Güncelle' : 'Ekle'}
 onSubmit={addOrUpdateHandler}
 cancelHandler={cancelHandler} //props fonksiyonu tetikliyor
 defaultValues={selectedCourse}
 

 
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
}