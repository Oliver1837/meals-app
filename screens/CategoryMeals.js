import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet ,TouchableOpacity} from 'react-native'
import {CATEGORIES,MEALS} from '../data/dummy-data'
import Colors from '../constants/Color'
import MealList from '../components/MealList'
const CategoryMealsScreen = (props)=>{

  


    const catId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId)>= 0);

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
CategoryMealsScreen.navigationOptions = (navigationData) =>{
    const catId = navigationData.navigation.getParam('categoryId');

    const selecetedCategory = CATEGORIES.find(cat => cat.id ==  catId);
    return{
    headerTitle :selecetedCategory.title ,
    headerStyle : {
        backgroundColor : Colors.primaryColor
    },
    headerTintColor : 'white' ,
}
}
const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center"
        ,
        alignItems:"center"
        ,width:'100%'



    },
    


})
export default CategoryMealsScreen;