import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES,MEALS} from '../data/dummy-data'
import MealList from '../components/MealList'

const FavoritiesScreen = (props)=>{
    const displayMeals = MEALS.filter(meal => meal.id=='m1'|| meal.id=='m2');

    return (
        <MealList
    listData ={
        displayMeals
    }
    navigation = {
        props.navigation
    }
        />

    );



}
FavoritiesScreen.navigationOptions  ={

    headerTitle :"Your favorities",
 
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