import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About'
import React from 'react'
import Header from '../shared/Header'

const screens = {
    About:{
        screen:About,        
        navigationOptions:{
            header:({navigation})=><Header navigation={navigation} title='About'/>
        }
    }
}
const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{
            backgroundColor:'#d3d3d3',
            height:90
        }
    }
})

export default AboutStack