import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'


export default function CourseForm() {
 
  const [inputs, setInputs] = useState({

    amount:'',
    date:'',
    description:'',

  })


  console.log(inputs);
  function inputChange(inputIdentifier,enteredValue){
setInputs((currentInput)=>{
return{
 ...currentInput,
 [inputIdentifier]:enteredValue // değiştirilmiş değer


}


} )



  }

  //buradan input componentine geçiyorum
    return (
    <View style={styles.form}>

   <Text style={styles.title}>Kurs Bilgileri</Text>

      <View style={styles.priceAndDate}>
      <Input 
      style={styles.flexAll}
      label="Tutar" textInputConfig={{

keyboardType:'decimal-pad',
onChangeText: inputChange.bind(this,'amount'),
value:inputs.amount, //ulaşıcam
}}/>


<Input // başlık için styles yollamadım(alt tarafı bozmadım)
style={styles.flexAll}
label="Tarih" textInputConfig={{

placeHolder:'YYYY-MM-DD',
maxLength:10,
onChangeText: inputChange.bind(this,'date'),
value:inputs.date,

}}/>
      </View>




<Input label="Başlık" textInputConfig={{

multiline:true,
onChangeText: inputChange.bind(this,'description'),
value:inputs.description,

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