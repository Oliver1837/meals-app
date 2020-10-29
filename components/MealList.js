import React from 'react'
import {FlatList,StyleSheet,View} from 'react-native' 
import MealItem from '../components/MealItem' 


const MealList = props =>{
    const renderMealItem = itemData =>{
        return(
            <MealItem 
            title={itemData.item.title} 
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
return (

<View style={styles.screen}>
            
            <FlatList
            data = {props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{ width: '95%' }}
            />
        </View>

);

}
export default MealList; 
const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center"
        ,
        alignItems:"center"
        ,width:'100%'



    },
    


})