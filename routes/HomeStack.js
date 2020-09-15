import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import React from 'react'
import Header from '../shared/Header'

const screens = {
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='GameZone'/>
            }
        }
    },
    ReviewDetails:{
        screen:ReviewDetails, 
        
        navigationOptions:{
            title:'Game Review',
            headerTitleAlign:'center',
        }
    }
}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'black',
        headerStyle:{
            backgroundColor:'#257BD1',
            height:90
        }
    }
})

export default HomeStack