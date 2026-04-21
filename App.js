import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider,MD3LightTheme} from "react-native-paper";
import PaperExamples from "./componets/Paper";
import test from "./componets/text"




const theme={
  ...MD3LightTheme,
  colors:{
    ...MD3LightTheme.colors,
    primary:"blue",
  }
}

export default function App() {
  return (
    
    <text/>
   
  );
}

