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
    backgroundColor:'#b94646',
    marginHorizontal:4,
    marginVertical:6
},
CardContent:{
    marginHorizontal:18,
    marginVertical:10,
    alignItems:'center'
}
})
