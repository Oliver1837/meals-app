import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Color'
const CategoryMealsScreen = (props)=>{
    const catId = props.navigation.getParam('categoryId');

    const selecetedCategory = CATEGORIES.find(cat => cat.id = catId)


    return (
        <View style={styles.screen}>
            <Text>Categories Screen  </Text>
            <Button title="go"
            onPress={()=>{
                    props.navigation.navigate({routeName: "MealDetail"})

            }}
            ></Button>
        </View>



    );



}
CategoryMealsScreen.navigationOptions = (navigationData) =>{
    const catId = navigationData.navigation.getParam('categoryId');

    const selecetedCategory = CATEGORIES.find(cat => cat.id = catId);
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



    }



})
export default CategoryMealsScreen;