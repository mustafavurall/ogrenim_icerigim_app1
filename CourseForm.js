import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function CourseForm() {
 
 //buradan input componentine geçiyorum
    return (
    <View style={styles.form}>

   <Text style={styles.title}>Kurs Bilgileri</Text>

      <View style={styles.priceAndDate}>
      <Input 
      style={styles.flexAll}
      label="Tutar" textInputConfig={{

keyboardType:'decimal-pad',
onChangeText:()=>{}

}}/>


<Input // başlık için styles yollamadım(alt tarafı bozmadım)
style={styles.flexAll}
label="Tarih" textInputConfig={{

placeHolder:'YYYY-MM-DD',
maxLength:10,
onChangeText:()=>{}

}}/>
      </View>




<Input label="Başlık" textInputConfig={{

multiline:true,
onChangeText:()=>{}

}}/>

    </View>
    
);
    
    
    
  
}

const styles = StyleSheet.create({
form:{
marginTop:40, //yularıdan ayırdım
},

title:{
fontSize: 25, //boyut
fontWeight:'bold', //kalınlık
textAlign: 'center', //ortalama
color:'blue',
marginVertical:20,

},
  priceAndDate:{
flexDirection:'row'

  },
  flexAll:{
    flex:1,
  },

})