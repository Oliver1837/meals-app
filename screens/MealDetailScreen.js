import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES,MEALS} from '../data/dummy-data'
import CustomHeaderButton from '../components/CustomHeader'
import {HeaderButtons ,Item} from 'react-navigation-header-buttons'
import {Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Color'
const MealDetailScreen = (props)=>{

    const mealId=props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(m => m.id == mealId );
 
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>

        </View>



    );



}
MealDetailScreen.navigationOptions = (naviagtionData) =>{
    const mealId=naviagtionData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId );
    console.log(selectedMeal)
    return {

        headerTitle : selectedMeal.title,
        headerRight : <HeaderButtons
        HeaderButtonComponent={CustomHeaderButton}
        >
        <Item
        title='favorite'
        iconName='ios-star'
        onPress={
            console.log('Mark favorite')
        }
        />
        <Item
        title='favorite'
        iconName='ios-star-outline'
        onPress={
            console.log('Mark not favorite')
        }
        />
        </HeaderButtons>


    };

}


const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center"
        ,
        alignItems:"center"



    }



})
export default MealDetailScreen;