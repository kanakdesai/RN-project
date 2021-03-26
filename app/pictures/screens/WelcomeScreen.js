import React, { useState } from 'react';
import { Keyboard,StyleSheet, View ,Text,TouchableWithoutFeedback, Button, TextInput} from 'react-native';



function WelcomeScreen(props) {
   // const [count,setCount] = useState(0);
    //const increaseCount=()=>{
      //   setCount(count + 1);
    //};
    //const decreaseCount=()=>{
      //   setCount(count - 1 );
    //};
    const [name, setName ]= useState('      ');
    const [age, setAge]= useState('   ');
    const NewName = (inp)=>{
        setName(inp);
    }
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.button}>
    
        <Text>The Name of the man is {name}</Text>
        <Text>The age of {name} is {age}</Text>
        <View style = {styles.buttonSTyle}>
            <TextInput style = {styles.input} 
            multiline
            placeholder={'change name'}
                onChangeText={NewName}
            />
            <Button  title={'Update name  '}  />
            <TextInput style = {styles.input} 
            placeholder={'change name'}
                onChangeText={(val)=>setAge(val)}
               keyboardType='numeric'
            />
            <Button title = {'Update Age'}  />
        </View>
    </View>
        </TouchableWithoutFeedback>
    );
            
    
}
const styles = StyleSheet.create({
    
    button:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
       
    },
    buttonSTyle:{

    },
    input:{
        borderWidth: 1,
        padding: 10,
        width: 400
    },
    
})
        
    
  

export default WelcomeScreen;