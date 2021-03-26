import React, { useState } from 'react';
import { Text, View, FlatList,StyleSheet,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './Header';
import ToDoList from './TodDoList';
import AddItems from './InputField';
export default function Todoapp(){
    const [todo, settodo]= useState([
        //{text: 'by apples', key:'1'},
        //{text: 'go home ', key:'2'},
        //{text: 'learn react native ', key:'3'},
        //{text: 'learn nodejs', key:'4'},
    ]);

    const pressHandler = (key) =>{
        settodo((prevtodo)=>{
            return prevtodo.filter(todo => todo.key!=key);
        });
        
    }
    const itemPusher=(text)=>{

        if(text.length>0){
            
            settodo((prevtodo)=>{
                
                return [
                    {text: text, key: Math.random().toString(10) },
                    ...prevtodo
                ];
            })
        }
        else{
            Alert.alert('Error while adding ToDos',
            'Please add more than one character',[
                {text: 'Okay'}
            ])
        }
    }
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View style={styles.container}>
            <Header/>
            {/*this will h=be header*/}
                <View  >
                <AddItems itemPusher={itemPusher}/>
                </View>
                {/* this will be form */}
                <View style={styles.content}>
                    <FlatList
                        data={todo}
                        renderItem={({ item })=>
                        (
                            <ToDoList item ={item} pressHandler={pressHandler}/>
                            
                        )}
                    />
                </View>
                
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        paddingHorizontal: 30,
        marginTop: 2,
        marginBottom: 2,
        flex: 1,
        
    },
    


})