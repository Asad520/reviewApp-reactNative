import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}) {
    const openMenu = ()=>{
        navigation.openDrawer()
    }
    return (
        <View style={styles.head}>
            <MaterialIcons name='menu' onPress={openMenu} style={styles.icon} size={28}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        position:'absolute',
        left:0
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
        letterSpacing:1,
        color:'#333'
    }
})



