import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import  {Icon as FontAwesome5}  from 'react-native-vector-icons/FontAwesome5'


export default function BottomTabs(){

const icons = [
        {
            icon:'home',
            text:'Home',
            color:"green"
        },
        {
            icon:'search',
            text:'Browse',
            color:"grey"
        },
        {
            icon:'shopping-bag',
            text:'Grocery',
            color:"grey"
        },
        {
            icon:'receipt',
            text:'Orders',
            color:"grey"
        },
        {
            icon:'user',
            text:'Account',
            color:"grey"
        },
]
  return(
        <View style={{flexDirection:"row",margin:10,marginHorizontal:30,justifyContent:'space-between',}}>
        {icons.map((icon,i)=> <BottomIcon key={i} {...icon}/>)}
        </View> 
 );
}

const BottomIcon = ({icon,text,color})=>(
    <TouchableOpacity>
    <View>
    <FontAwesome5 color={color} name={icon} size={25} style={{marginBottom: 3,alignSelf: 'center'}}/>
    <Text style={{color:"#000"}}>{text}</Text>
    </View>
    </TouchableOpacity>
);