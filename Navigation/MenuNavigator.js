import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenuScreen from '../Page/Menu/MainMenuScreen';
import SearchScreen from '../Page/Menu/SearchScreen';
import ToolsScreen from '../Page/Menu/ToolsScreen';




const Stack = createNativeStackNavigator();

const MenuNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainMenu">
                <Stack.Screen name="MainMenu" component={MainMenuScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="ToolsScreen" component={ToolsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MenuNavigator;