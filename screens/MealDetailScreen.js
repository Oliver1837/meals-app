import React ,{useState}from 'react'
import {View, Text, Button, FlatList, StyleSheet, Image} from 'react-native'
import {CATEGORIES,MEALS} from '../data/dummy-data'
import CustomHeaderButton from '../components/CustomHeader'
import {HeaderButtons ,Item} from 'react-navigation-header-buttons'
import {Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Color'
import { ScrollView } from 'react-native-gesture-handler'
const MealDetailScreen = (props)=>{

    const mealId=props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(m => m.id == mealId );
 
    return (
       <ScrollView>
           <Image source={{uri:selectedMeal.imageUrl}} style={styles.bgImage}/>
        <View style={styles.mealDetail}>
    <Text>{selectedMeal.duration}m</Text>
<Text>{selectedMeal.complexity}</Text>
<Text>{selectedMeal.affordability}</Text>


        </View>
    <Text style={styles.title}>Ingredients</Text>
    {selectedMeal.ingredients.map(ingredients => <Text style={styles.textList}>{ingredients}</Text>)}
    <Text style={styles.title}>Steps</Text>
    {selectedMeal.steps.map(steps => <Text  style={styles.textList}>{steps}</Text>)}
       </ScrollView>



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
    mealRow:{
        flexDirection:"row"
        ,
    },mealItem:{  
      height:200,
      width:'100%',
      backgroundColor:"#ccc",
      borderRadius:10,
      overflow:'hidden',
      marginTop:10,  
      elevation:5
    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        flexDirection:"row"
        ,justifyContent:'space-between',
        padding:15
    },title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'black',
        textAlign:"center"

        

    },
    textList:{
        borderColor:"grey",
        borderWidth:1,
        margin:5,
        padding :15,
        
    }
    ,
    bgImage:{
        height:200,
        width:'100%',
  
    }




})
export default MealDetailScreen;