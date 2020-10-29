import {createStackNavigator, } from 'react-navigation-stack' 
import { createAppContainer ,} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import CategoriesScreen   from '../screens/CategoriesScreen'
import CategoryScreen from '../screens/CategoryMeals'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritiesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FiletersScreen'
import  Colors  from '../constants/Color'
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
const FavoritiesNavigator =   createStackNavigator({
    Favorities: FavoritiesScreen,
    MealDetail : {

        screen : MealDetailScreen

    }


},{
defaultNavigationOptions : {
    headerDefault:{
        backgroundColor: Colors.primaryColor,
    }
}})
const tabConfig = {
    Meals:{
    
        screen:MealsNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
    
                return (<Ionicons name ='ios-restaurant' size={25} color={tabInfo.tintColor} />
                );
            } , 
            
            tabBarColor: Colors.primaryColor

        }
    
    },
    Favorities :{
        screen : FavoritiesNavigator
        ,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
    
                return (<Ionicons name ='ios-star' size={25} color={tabInfo.tintColor} />
               
                );
            }, 
            
            tabBarColor: Colors.accentColor
        }
        }
    }

const  MealsFaTabNavigator = createMaterialBottomTabNavigator(tabConfig
,{
    activeColor : 'white',

    shifting:true,
    barStyle:{
        backgroundColor: Colors.primaryColor

    }
});
export default  createAppContainer(MealsFaTabNavigator) ;