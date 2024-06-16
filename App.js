// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Page/HomeScreen';
import LoginScreen from './Page/LoginScreen';
import DashboardTabNavigator from './Navigation/DashboardTabNavigator';
import MenuNavigator from './Navigation/MenuNavigator';
import MyProfile from './Page/ProfileScreen';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: ['Login', 'Menu', 'Profile','Search','Tools'].includes(route.name),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={MyProfile} />
        <Stack.Screen
          name="Dash"
          component={DashboardTabNavigator}
        />
        <Stack.Screen
          name="Menu"
          component={MenuNavigator}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Tools" component={ToolsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
