import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Button, Searchbar } from "react-native-paper";

export default MainMenuScreen = ({ navigation }) => {
    const [SearchText, setSearchText] = useState("");

    const menuItems = [
        { title: 'About' },
        { title: 'Admission' },
        { title: 'Academics' },
        { title: 'Campus Life' },
    ];

    return (
        <View className='flex-1 bg-white'>
            <View>
                <Searchbar className='mx-2 ' value={SearchText}
                    onChangeText={(text) => setSearchText(text)}></Searchbar>
                <FlatList
                    data={menuItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity className="p-4 border-b border-gray-600" onPress={item.onPress}>
                            <Text className="text-base">{item.title}</Text>
                        </TouchableOpacity>
                    )} />
            </View>
            <View className='p-4 flex-row justify-end'>
                <Button className="bg-blue-600 px-4 py-1 rounded-3xl" onPress={() => { navigation.navigate("Home"); }}>
                    <Text className="text-white font-bold">Log Out</Text>
                </Button>
            </View>
        </View>
    );
};
