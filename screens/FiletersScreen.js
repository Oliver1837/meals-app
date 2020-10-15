import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet} from 'react-native'
const FiletersScreen = (props)=>{

    return (
        <View style={styles.screen}>
            <Text>Fileters Screen </Text>

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
export default FiletersScreen;