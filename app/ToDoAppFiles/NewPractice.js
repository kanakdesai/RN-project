import React from 'react';
import { View,Text,StyleSheet,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function NewPractice(props){
    const [people , setpeople] = useState(
        [
            {name: 'kanak', id : '1'},
            {name : 'chavan', id : '2'},
            {name : 'prithviraj', id : '3'},
            {name : 'rakesh', id : '4'},
            {name : 'ramu', id : '5'},
        ]
    )
    const onPressHandler=(idd) => {
        
        setpeople((prevPeople)=>{
            return (
                prevPeople.filter(person => person.id != idd)
            )
        });
    }

    return(
        <View style={styles.container}>
        <FlatList
        
        keyExtractor={(item)=>(item.id)}
        data={people}
        renderItem={({item})=>
            (
                <TouchableOpacity onPress={()=>onPressHandler(item.id)}> 
                <Text style={styles.textStyle}>{item.name}</Text>

                </TouchableOpacity>
            )
        }


        />

        
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: 20,
        paddingTop: 100,
        paddingRight: 20
    },
    textStyle:{
        marginTop: 24,
        padding: 30,
        backgroundColor:'grey',
        fontSize: 30,
        marginHorizontal: 20
    }
})

export default NewPractice;