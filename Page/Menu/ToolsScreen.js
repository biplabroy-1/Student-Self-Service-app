import React from 'react';
import { View, Text } from 'react-native';

export default ToolsScreen = () => {
    const tools = [
        { title: 'Notes', icon: '📝' },
        { title: 'Events', icon: '📅' },
        { title: 'CGPA Calculator', icon: '📊' },
        { title: 'Results', icon: '📈' },
        { title: 'Bills', icon: '💰' },
        { title: 'Forms', icon: '📋' },
    ];

    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-xl font-bold mb-4">TOOLS</Text>
            <View className="flex-row flex-wrap justify-center">
                {tools.map((tool, index) => (
                    <View key={index} className="w-1/3 h-24 items-center justify-center bg-gray-200 m-2 rounded-lg">
                        <Text className="text-lg mb-2">{tool.icon}</Text>
                        <Text className="text-base text-center">{tool.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};
