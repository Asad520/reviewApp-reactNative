import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.Card}>
            <View style={styles.CardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
Card:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'#5D96D0',
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:0.5,
    textShadowRadius:2,
    marginHorizontal:4,
    marginVertical:6
},
CardContent:{
    marginHorizontal:18,
    marginVertical:10,
    alignItems:'center'
}
})
