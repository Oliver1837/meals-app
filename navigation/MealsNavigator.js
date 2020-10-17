import {createStackNavigator, } from 'react-navigation-stack' 
import { createAppContainer ,} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import CategoriesScreen   from '../screens/CategoriesScreen'
import CategoryScreen from '../screens/CategoryMeals'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritiesScreen from '../screens/FavoritesScreen'
import  Color  from '../constants/Color'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'
const  MealsNavigator = createStackNavigator({

    Categories : {
        screen: CategoriesScreen
    },
    Category : {
        screen: CategoryScreen

    },
    MealDetail : {

        screen : MealDetailScreen

    }


});

const tabConfig = {
    Meals:{
    
        screen:MealsNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
    
                return <Ionicons name ='ios-restaurant' size={25} color={tabInfo.tintColor} />
    
            } ,
            tabBarColor: Color.primaryColor
        }
    
    },
    Favorities :{
        screen : FavoritiesScreen
        ,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
    
                return <Ionicons name ='ios-star' size={25} color={tabInfo.tintColor} />
    
            },
            tabBarColor: Color.accentColor
        }
        }
    }

const  MealsFaTabNavigator = createMaterialBottomTabNavigator(tabConfig
,{
tabBarOptions:{
    activeColor : Color.accentColor,
    shifting:true
}


});
export default  createAppContainer(MealsFaTabNavigator) ;