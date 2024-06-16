// MenuNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from '../Page/Menu/MainMenuScreen';
import SearchScreen from '../Page/Menu/SearchScreen';
import ToolsScreen from '../Page/Menu/ToolsScreen';

const Stack = createNativeStackNavigator();

const MenuNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="MainMenu" component={MainMenuScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Tools" component={ToolsScreen} />
        </Stack.Navigator>
    );
};

export default MenuNavigator;