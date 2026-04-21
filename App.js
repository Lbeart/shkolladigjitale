import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider,MD3LightTheme} from "react-native-paper";
import PaperExamples from "./componets/Paper";
import test from "./componets/text"
import leart from "./componets/leart"


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

