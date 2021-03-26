import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Todoapp from './app/ToDoAppFiles/Todoapp';

const getFonts=() => Font.loadAsync({
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  
});
export default function App() {
  
    
     
    const[ fontsLoaded, setfontsLoaded]= useState(false);

    if(fontsLoaded){
  
      return (
       
        <Todoapp/>
      );
    }
    else{
      return (
      <AppLoading 
        startAsync= {getFonts}
        onFinish= {()=>setfontsLoaded(true)}
        onError={console.warn}
      />
      )
    }
      }
  

