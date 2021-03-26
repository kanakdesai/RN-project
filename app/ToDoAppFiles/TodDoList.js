import React from 'react';
import { TouchableOpacity, Text ,StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function ToDoList({item, pressHandler}){
    
    return(
        <TouchableWithoutFeedback>
            <View style ={styles.textSt} >
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>

            <AntDesign name="delete" size={20}/>
            </TouchableOpacity>
            <Text style ={styles.textStyle}>{item.text}
            
            {/*<Button  style={styles.button} title={'X'}></Button>*/}
            
            </Text>
            </View>
            </TouchableWithoutFeedback>
    )}

    const styles = StyleSheet.create({
        textSt:{
            flexDirection: 'row',
            padding: 16,
            marginTop: 15,
            borderColor: 'pink',
            borderWidth: 1,
            marginBottom:5,
            
            borderRadius: 10
        },
        textStyle:{
            marginLeft: 10,
            fontFamily: 'ubuntu-bold'
        }
       
        
       
    })