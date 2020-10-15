import {createStackNavigator, } from 'react-navigation-stack' 
import { createAppContainer } from 'react-navigation'
import CategoriesScreen   from '../screens/CategoriesScreen'
import CategoryScreen from '../screens/CategoryMeals'
import MealDetailScreen from '../screens/MealDetailScreen'
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

export default  createAppContainer(MealsNavigator) ;