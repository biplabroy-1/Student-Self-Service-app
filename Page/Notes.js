import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SubjectsScreen = ({ navigation }) => {
    return (
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
                    onPress={() => navigation.navigate('OBM752Notes')}
                >
                    <Text>OBM752</Text>
                    <Text>Hospital Management</Text>
                </TouchableOpacity>
                {/* Add more subject cards */}
            </View>
        </View>
    );
};

const OBM752NotesScreen = () => {
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

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Subjects" component={SubjectsScreen} />
                <Stack.Screen name="OBM752Notes" component={OBM752NotesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;