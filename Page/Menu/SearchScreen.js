import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default SearchScreen = ({ navigation }) => {
    const mostSearches = ['events', 'Sports', 'Admissions'];

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="items-center justify-center flex-1">
                    <Text className="text-xl font-bold mb-4">SEARCH</Text>
                    <View className="bg-gray-200 rounded-lg px-4 py-2 mb-4 flex-row items-center">
                        <Text className="mr-2">🔍</Text>
                        <Text>Search</Text>
                    </View>
                    <View className="flex-row justify-around w-4/5">
                        {mostSearches.map((item, index) => (
                            <TouchableOpacity key={index} className="bg-gray-300 rounded-lg px-4 py-2">
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <TouchableOpacity
                    className="bg-indigo-500 p-4 items-center"
                    onPress={() => navigation.navigate('Tools')}
                >
                    <Text className="text-white font-bold">TOOLS</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
