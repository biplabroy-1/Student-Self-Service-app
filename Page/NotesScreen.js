import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default NotesScreen = () => {
    return (

            <View style={{ flex: 1, padding: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>OBM752 Notes / Materials</Text>
                <View>
                    <TouchableOpacity style={{ padding: 16, backgroundColor: '#e0f2f1', borderRadius: 8, marginBottom: 8 }}>
                        <Text>Unit 1</Text>
                        <Text>Overview of Hospital Administration</Text>
                    </TouchableOpacity>
                    {/* Add more unit cards */}
                </View>
            </View>

    );
};
