import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { globalStyles, images } from "../styles/global";
import Card from '../shared/Card'

export default function ReviewDetails({navigation}) {
    const pressHandler = ()=>{
        navigation.navigate('Home')
    }
    return (
        <View style={globalStyles.cont}>
            <Card>
                <Text style={styles.text}>TITLE: {navigation.getParam('title')} </Text>
                <Text style={styles.text}>ABOUT: {navigation.getParam('body')} </Text>
                <View style={styles.rate}>
                    <Text style={{fontSize:15,
                    fontWeight:'bold'}}>GameZone Rating:</Text>
                    <Image source={images.ratings[navigation.getParam('rating')]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rate:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:2,
        borderTopColor:'black',
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
})