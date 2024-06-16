import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const MyProfile = () => {
    return (
            <ScrollView className="flex-1 bg-white">
                <View className="flex-row items-center justify-between p-4">
                    <View className="flex-row items-center">
                        <Image
                            source={require('../assets/logo.png')}
                            style={{ width: 50, height: 50, borderRadius: 25 }}
                        />
                        <Text className="ml-4 text-lg font-bold">Brainware University</Text>
                    </View>
                    <View className="bg-gray-200 rounded-full p-2">
                        <Text className="text-gray-500">🔔</Text>
                    </View>
                </View>

                <View className="bg-purple-100 p-4 mx-4 rounded-lg">
                    <Text className="text-purple-800 font-bold">
                        DEPARTMENT: B.Tech. Information Technology
                    </Text>
                    <Text className="text-purple-800">SEMESTER: 7</Text>
                    <Text className="text-purple-800">CURRENT CGPA: 7.5</Text>
                    <Text className="text-purple-800">ACADEMIC YEAR: 2020 - 2024</Text>
                </View>

                <View className="p-4">
                    <Text className="text-lg font-bold">About</Text>
                    <View className="mt-2">
                        <Text>Date of Birth: 1st Jan 2002</Text>
                        <Text>Gender: MALE</Text>
                    </View>
                </View>

                <View className="p-4">
                    <Text className="text-lg font-bold">Contact Details</Text>
                    <View className="mt-2">
                        <Text>Contact no: 123456790</Text>
                        <Text>Email: abc123@gmail.com</Text>
                        <Text>Address: 12, abc street, defgh, ijklm - 123456.</Text>
                    </View>
                </View>

                <View className="p-4">
                    <Text className="text-lg font-bold">Current / Ongoing Courses</Text>
                    <View className="flex-row items-center mt-2">
                        <Image
                            source={require('../assets/icon.png')}
                            style={{ width: 30, height: 30 }}
                        />
                        <View className="ml-4">
                            <Text className="font-bold">B.Tech IT</Text>
                            <Text>Information Technology</Text>
                            <Text>Department of Engineering</Text>
                            <Text>Sep 2020 - June 2024</Text>
                            <Text>2024 Passout Batch | 210520201234</Text>
                        </View>
                    </View>
                </View>

                <View className="p-4">
                    <Text className="text-lg font-bold">Projects</Text>
                    <View className="mt-2">
                        <Text className="text-gray-500">You have not added any yet!</Text>
                    </View>
                </View>

                <View className="p-4">
                    <Text className="text-lg font-bold">Certifications</Text>
                    <View className="mt-2">
                        <Text className="text-gray-500">You have not added any yet!</Text>
                    </View>
                </View>

                <View className="p-4">
                    <Text className="text-lg font-bold">Patents</Text>
                    <View className="mt-2">
                        <Text className="text-gray-500">You have not added any yet!</Text>
                    </View>
                </View>

                <View className="p-4">
                    <Text className="text-lg font-bold">Extra Curricular Activities</Text>
                    <View className="mt-2">
                        <Text className="text-gray-500">You have not added any yet!</Text>
                    </View>
                </View>
            </ScrollView>
    );
};

export default MyProfile;
