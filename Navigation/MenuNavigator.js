// MenuNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from '../Page/Menu/MainMenuScreen';
import SearchScreen from '../Page/Menu/SearchScreen';
import ToolsScreen from '../Page/Menu/ToolsScreen';

const Stack = createStackNavigator();

const MenuNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: !['MainMenu'].includes(route.name),
            })}
        >
            <Stack.Screen name="MainMenu" component={MainMenuScreen} />

        </Stack.Navigator>
    );
};

export default MenuNavigator;