// DashboardTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardScreen from '../Page/Dashboard';
import ProfileScreen from '../Page/Profile';
import SettingsScreen from '../Page/Settings';
import MenuNavigator from './MenuNavigator';

const Tab = createBottomTabNavigator();

const DashboardTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
                        iconName = 'dashboard';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }
                    else if (route.name === 'Menu') {
                        iconName = 'menu';
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Menu" component={MenuNavigator} />
        </Tab.Navigator>
    );
};

export default DashboardTabNavigator;
