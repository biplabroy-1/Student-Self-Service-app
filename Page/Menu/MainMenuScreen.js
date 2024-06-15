import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

export default MainMenuScreen = ({ navigation }) => {
    const menuItems = [
        { title: 'Search', onPress: () => navigation.navigate('Search') },
        { title: 'About' },
        { title: 'Admission' },
        { title: 'Academics' },
        { title: 'Campus Life' },
        { title: 'Log Out' },
    ];

    return (
        <View className="flex-1 bg-white">
            <FlatList
                data={menuItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity className="p-4 border-b border-gray-300" onPress={item.onPress}>
                        <Text className="text-base">{item.title}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    );
};
