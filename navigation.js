import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import OnboardingScreen from "./screens/OnboardingScreen"

const store = configureStore();
export default function RootNavigation(){
 const Stack = createStackNavigator()
 
    return(
        <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )
}