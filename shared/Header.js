import React from 'react'
import {View, Text, StyleSheet, ImageBackground } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}) {
    const openMenu = ()=>{
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/tek.png')} style={styles.head}>
            <MaterialIcons name='menu' onPress={openMenu} style={styles.icon} size={28}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    head:{
        width:"100%",
        height:110,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        position:'absolute',
        left:10,
        top:50,
        color:'#fff'
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
        letterSpacing:1,
        color:'#fff',
        marginTop:10,
    }
})



