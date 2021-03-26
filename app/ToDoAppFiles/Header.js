import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

 export default function header(){
     return(
         <View style={styles.container}>
             <Text style={styles.TextStyle}>My List.</Text>
         </View>
     )
 }
const styles = StyleSheet.create({
container:{
    height: 100,
    paddingTop: 60,
    backgroundColor: 'coral'
},
TextStyle:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
}
})
