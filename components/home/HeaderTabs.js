import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs({activeTab,setActivetab}){
    return(
        <View style={{flexDirection:"row", alignSelf:'center'}}>
            <HeaderButton text="Delivery" 
              btnColor="#000"
              txtColor="#fff" 
              activeTab ={activeTab}
              setActivetab={setActivetab}
              />
            <HeaderButton text="Pickup" 
              btnColor="#fff"
              txtColor="#000"
             activeTab ={activeTab}
             setActivetab={setActivetab}
             />
        </View>
    )
}

 const HeaderButton = ({text,activeTab,setActivetab})=>(
    <View>
        <TouchableOpacity 
        onPress={()=>setActivetab(text)}
        style={{
          backgroundColor:activeTab ===text ? '#006400': '#fff',
          paddingVertical:6,
          paddingHorizontal:16,
          borderRadius:30
        }}>
            <Text style={{color:activeTab===text ?'#fff':'#000',fontSize:16,fontWeight:"bold"}}>{text}</Text>
        </TouchableOpacity>
    </View>
 )