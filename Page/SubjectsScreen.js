import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default SubjectsScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View style={{ flex: 1, padding: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Notes / Materials</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity
                        style={{
                            padding: 16,
                            backgroundColor: '#e0f2f1',
                            borderRadius: 8,
                            marginRight: 8,
                            marginBottom: 8,
                        }}
                        onPress={() => navigation.navigate('PDFs')}
                    >
                        <Text>OBM752</Text>
                        <Text>Hospital Management</Text>
                    </TouchableOpacity>
                    {/* Add more subject cards */}
                </View>
            </View>
        </SafeAreaView>
    );
};


