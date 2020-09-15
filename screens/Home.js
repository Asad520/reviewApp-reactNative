import React, {useState} from 'react'
import { Text, View,FlatList,TouchableOpacity, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../shared/Card'

export default function Home({navigation}){
    const [games, setgames] = useState([
        {key:'1', title:'Tekken', rating:'2', body:'Lorem Ipsum oui ouiii!'},
        {key:'2', title:'Tekken 2', rating:'4', body:'Lorem Ipsum oui ouiii!'},
        {key:'3', title:'Tekken 3', rating:'5', body:'Lorem Ipsum oui ouiii!'},
        {key:'4', title:'Tekken 4', rating:'2', body:'Lorem Ipsum oui ouiii!'},
        {key:'5', title:'Tekken 5', rating:'4', body:'Lorem Ipsum oui ouiii!'},
        {key:'6', title:'Tekken 6', rating:'4', body:'Lorem Ipsum oui ouiii!'},
        {key:'7', title:'Tekken 7', rating:'4', body:'Lorem Ipsum oui ouiii!'}
      ])

    const pressHandler = ()=>{
        navigation.navigate('ReviewDetails')
    }
    return(
        <ImageBackground source={require('../assets/bg.png')} style={globalStyles.cont}>
            <FlatList 
            data={games}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                    <Card>
                        <Text style={globalStyles.textHeading}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </ImageBackground>
    )
}