import React from 'react';
import {View, Text} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({cityHandler}){
    return(
        <View style={{marginTop:15,flexDirection:"row"}}>
            <GooglePlacesAutocomplete
            query={{key:'AIzaSyBsTvuB6janl3Pf45isyey66MXEuYc-8-k'}}
            onPress={(data)=>{
               let city = data.description.split(',')[0];
               cityHandler(city)
            }}
            placeholder='Search'
            textInputProps={{
                placeholderTextColor: '#32a852',
              }}
            styles={{
                textInput:{
                    backgroundColor:"#eee",
                    borderRadius:20,
                    fontWeight:'bold',
                    marginTop:7,
                    color:"#000"
                },
                textInputContainer:{
                    backgroundColor:'#eee',
                    borderRadius:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginRight:18,
                },
                description:{color:"#000"},
            }} 
           renderLeftButton={()=>(
           <View style={{marginLeft:10}}>
             <Ionicons name="location-sharp" size={24} color="green"/>
           </View>
    )}
        renderRightButton = {() =>(
            <View style={{
                flexDirection:"row",
                marginRight:8,
                backgroundColor:'#fff',
                padding:9,
                borderRadius:30,
                alignItems:"center",
            }}>
                <AntDesign name="clockcircle" color="#006400" size={11} style={{marginRight:6}}/>
                <Text style={{color:"green"}}>Search</Text>
            </View>
        )}
        enablePoweredByContainer={false}
            />
        </View>
    )
}