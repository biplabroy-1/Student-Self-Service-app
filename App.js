import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Page/HomeScreen";
import LoginScreen from "./Page/LoginScreen";
import Dashboard from "./Navigation/DashNavigator";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: !["Home", "Dash"].includes(route.name),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dash" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
