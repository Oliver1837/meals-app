import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet ,TouchableOpacity} from 'react-native'
import {CATEGORIES,MEALS} from '../data/dummy-data'
import Colors from '../constants/Color'
import MealItem from '../components/MealItem' 
const CategoryMealsScreen = (props)=>{

    const renderMealItem = itemData =>{
    return(
        <MealItem title={itemData.item.title} 
        duration = {itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={()=>{
            console.log("press")
            props.navigation.navigate({
                routeName : 'MealDetail',
                params:{

                    mealId: itemData.item.id

                }



            });
        }}
       
        
        />
        
    );

    }


    const catId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId)>= 0);

    return (
        <View style={styles.screen}>
            
            <FlatList
            data = {displayMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{ width: '95%' }}
            />
        </View>



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