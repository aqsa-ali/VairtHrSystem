//Libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from '../screens/Home'


//Services
import { navigationRef } from './navigationServices';
import { ScreenNames } from './constants'

const Stack = createNativeStackNavigator();

const Navigations = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={ScreenNames.home}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={ScreenNames.home} component={Home} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;