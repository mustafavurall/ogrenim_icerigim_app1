import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { CoursesContext } from '../store/coursesContext';


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




  return (
    <View style={styles.container}>


<View style={styles.buttons}>
  <Pressable onPress={cancelHandler}>
    <View style={styles.cancel}>
      <Text style={styles.cancelText}>
        İptal Et
      </Text>
    </View>
  </Pressable>
  <Pressable onPress={addOrUpdateHandler}>
    <View style={styles.addOrDelete}>
      <Text style={styles.addOrDeleteText}>
       {isEditing ? "Güncelle":"Ekle"}
      </Text>
    </View>
  </Pressable>
</View>





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
buttons:{
  flexDirection:'row',
  justifyContent:'center',
},
cancel:{
  backgroundColor:'red',
  minWidth:120,
  marginRight:10,
  padding: 8,
  alignItems: 'center',
},

cancelText:{
  color:'white',
},

addOrDelete:{
  backgroundColor:'blue',
  minWidth:120,
  marginRight:10,
  padding: 8,
  alignItems: 'center',
},

addOrDeleteText:{
  color:'white' ,
},
});