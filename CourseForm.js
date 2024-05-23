import { StyleSheet, Text, View ,Pressable } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'


export default function CourseForm({cancelHandler,onSubmit,buttonLabel
}) {
 
  const [inputs, setInputs] = useState({

    amount:'',
    date:'',
    description:'',

  });

  function addOrUpdateHandler(){

    const courseData={
amount:Number(inputs.amount) ,
date:new Date(inputs.date),
description:inputs.description

    };

    onSubmit(courseData);

  }


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

}}

/>
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

         {buttonLabel}
       
      </Text>
    </View>
  </Pressable>
</View>
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

})