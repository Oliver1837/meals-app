import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet} from 'react-native'
const FavoritiesScreen = (props)=>{

    return (
        <View style={styles.screen}>
            <Text>Favorities Screen   </Text>

        </View>



    );



}
const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center"
        ,
        alignItems:"center"



    }



})
export default FavoritiesScreen;