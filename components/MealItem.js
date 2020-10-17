import React ,{useState}from 'react'
import {View, Text, Button, FlatList, ImageBackground,StyleSheet ,TouchableOpacity} from 'react-native'



const MealItem = props =>{

    return(
        <View style={styles.mealItem}>
        <TouchableOpacity
        onPress={props.onSelectMeal}
        
        >
        <View>
        <View style={{...styles.mealRow,...styles.mealHeader}}>
        <ImageBackground source={{uri:props.image}}
        style={styles.bgImage}
        ><View 
             style={styles.titleContaine}
        >
        <Text 
              style={styles.title}
                  numberOfLines={1}
        >
            {props.title.toUpperCase()}
        </Text>
        </View>
        </ImageBackground>
        </View>
        <View style={{...styles.mealRow,...styles.mealDetail}}>
         <Text>{props.duration}m</Text>
         <Text>{props.complexity.toUpperCase()}</Text>
         <Text>{props.affordability.toUpperCase()}</Text>
        </View>
        </View>
        </TouchableOpacity>
        </View>
    );



}

const styles = StyleSheet.create({
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
        paddingHorizontal: 10
        ,justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'#f5f5f5',
        textAlign: 'center',
        

    },
    titleContaine:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,

    }
    
    ,
    bgImage:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    }





});


export default MealItem;