
import React from 'react'
import { Button } from "react-native-paper";
import { View, Text, Image } from "react-native";

function Navbar({ navigation }) {
    return (
        <View className="p-4 flex-row items-center justify-between ">
            <View className="flex-row items-center">
                <Image className="w-10 h-10 bg-gray-900 rounded-full" />
                <Text className="ml-2 text-2xl font-bold">NAMES</Text>
            </View>
            <Button className="bg-purple-600 rounded-3xl" onPress={() => { navigation.navigate("MainMenu"); }}>
                <Text className="text-white font-bold">MENU</Text>
            </Button>
        </View>
    )
}

export default Navbar