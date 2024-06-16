import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [studentCode, setStudentCode] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (studentCode === "" || password === "") {
      Alert.alert(
        "Incomplete Fields",
        "Please enter both Student Code and Password."
      );
      return;
    }
    navigation.navigate("Dash");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View className="items-center mb-5">
          <Image source={require("../assets/logo.png")} className="w-24 h-24" />
          <Text className="text-2xl font-bold text-blue-600 mt-5">
            Welcome to BWU
          </Text>
          <Text className="text-sm text-black">
            LET ACCESS ALL WORK FROM HERE
          </Text>
        </View>
        <View className="mb-4">
          <TextInput
            className="h-10 border border-gray-300 rounded mb-3 px-3"
            placeholder="Student Code"
            value={studentCode}
            onChangeText={(text) => setStudentCode(text)}
          />
          <TextInput
            placeholder="Password"
            className="h-10 border border-gray-300 rounded mb-3 px-3"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View className='flex-row justify-between items-center'>
          <Text className="text-blue-600 underline">Forget Password</Text>
          <Button
            className="bg-blue-600 w-32 rounded-3xl items-center"
            onPress={handleLogin}
          >
            <Text className="text-white text-lg">Login</Text>
          </Button>
        </View>
        <View className="absolute bottom-2 pl-28">
          <Text>Made By 💖 from India</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
