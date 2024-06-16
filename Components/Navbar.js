import React from 'react'
import { Button } from "react-native-paper";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Navbar() {

    const handleMenu = () => {
        navigation.navigate("Menu");
    }

    const handleProfile = () => {
        navigation.navigate("Profile");
    }

    const navigation = useNavigation();
    return (
        <View className="p-4 flex-row items-center justify-between ">
            <Pressable className="flex-row items-center py-2 pr-8" onPress={handleProfile}>
                <Image source={require("../assets/biplab.jpg")} className="w-10 h-10 bg-gray-900 rounded-full" />
                <Text className="ml-2 text-xl font-semibold">Biplab Roy</Text>
            </Pressable>
            <Button className="bg-purple-600 rounded-3xl" onPress={handleMenu}>
                <Text className="text-white font-bold">MENU</Text>
            </Button>
        </View>
    )
}

export default Navbar