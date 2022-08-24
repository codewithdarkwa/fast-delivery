import React from 'react';
import { useEffect,useState } from 'react'
import { View,SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'
import { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
import { localFoods } from '../localFoods'

const YELP_API_KEY = 'T3KmNiUNLVKG9vQeiy16yr3-yShgQV728urB4CZsu2ttVLvv9gEZXlFpy2gxQ1EJ5-nBj60m6tbbN_Wau1AKghfHgHP_tDMfWYTPZPNhbtlA1KP_QvzhckkVqKjOYnYx';

export default function Home({navigation}){
  
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('Atlanta');
    const [activeTab, setActivetab] = useState('Delivery');

   const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        const apiOptions = {
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
            },
          };
             return city === 'Ghana'? setRestaurantData(localFoods) : fetch(yelpUrl, apiOptions)
             .then((res)=>res.json())
             .then((json)=>setRestaurantData(json.businesses
             .filter((business)=> business.transactions
             .includes(activeTab.toLowerCase()))));
    }

    useEffect(()=>{
        getRestaurantsFromYelp();
    },[city,activeTab])

    return(
      <SafeAreaView style={{backgroundColor:'#eee',flex: 1}}>
            <View style={{backgroundColor:'#fff',padding:15}}>
           <HeaderTabs activeTab={activeTab} setActivetab={setActivetab}/>
           <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
          <Categories/>
      <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs />
        </SafeAreaView>
    )
}