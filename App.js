import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, StyleSheet, View } from "react-native";
import * as Font from "expo-font"
import {AppLoading} from 'expo'
import Navigator from './routes/Drawer'

const getFonts = ()=> Font.loadAsync({
  'IndieFlower-Regular':require('./assets/fonts/IndieFlower-Regular.ttf'),
  'ArchitectsDaughter-Regular':require('./assets/fonts/ArchitectsDaughter-Regular.ttf')
})

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false)
  if(fontLoaded){
  return (
    <>
      <StatusBar style="auto" backgroundColor="white" />
      <Navigator />
    </>
    );}else{
      return(
        <>
          <View style={styles.load}>
            <Text>L o a d i n g . . . .</Text>
            <AppLoading startAsync={getFonts} onFinish={()=>setfontLoaded(true)}/>
          </View>
        </>
      )

    }
}

const styles = StyleSheet.create({
  load:{
    flex:1,
    alignItems:"center",
    alignContent:"center",
    paddingTop:100
  }
})
