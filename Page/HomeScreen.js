import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full h-2/3 flex items-center justify-center">
        <Image className="w-28 h-28" source={require("../assets/logo.png")} />
        <Text className="mt-10 font-bold text-blue-900 text-3xl text-center">
          Welcome To Brainware University
        </Text>
        <Text className="mt-4 text-black font-bold text-sm text-center">
          LET ACCESS ALL WORK FROM HERE
        </Text>
      </View>
      <View className="mt-20 justify-center items-center">
        <TouchableOpacity
          className="w-32 h-12 justify-center items-center border border-blue-800 round rounded-3xl"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="font-bold text-blue-900 uppercase">Log In</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
