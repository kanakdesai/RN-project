import React, { useState } from 'react';
import { Text, View, TextInput,StyleSheet, Button } from 'react-native';

export default function AddItems({itemPusher}){
    const [text, setText]= useState('');

    const TextChanger=(val)=>{
            setText(val);
    }
    return(
        <View> 
        <TextInput placeholder={'Add todos...'} 
        onChangeText={TextChanger}
        style={styles.textFiled}
        clearButtonMode="always"
        >
        
        </TextInput>
        <Button title={'Add Todo'} color={'coral'}
        onPress={()=>itemPusher(text)}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
  textFiled:{
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginTop: 30,
      marginHorizontal:30,
      borderWidth: 1,

  }  
})