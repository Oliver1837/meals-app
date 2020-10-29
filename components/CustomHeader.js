import React from 'react'
import {HeaderButton ,Item} from 'react-navigation-header-buttons'
import {Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Color'

const CustomHeaderButton = props =>{

    return <HeaderButton
        {...props} 
        IconComponent={Ionicons}
        iconSize={23}
        color = {"transparent"}
    />

}
export default CustomHeaderButton;