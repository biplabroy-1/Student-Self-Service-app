import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../Components/Navbar";
import ClassComponoent from "../Components/ClassComponoent";
import { NativeWindStyleSheet } from "nativewind";
import Attendence from "../Components/Attendence";




const Dashboard = () => {







    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="bg-white">
                <Navbar />
                <View className="mt-4 px-4">
                    <Text className="text-xl font-semibold">Today Classes</Text>
                    <ClassComponoent />
                </View>
                <Attendence />

                <View className="mt-4 px-4">
                    <Text className="text-xl font-semibold">Upcoming Schedules</Text>
                    <View className="bg-purple-200 p-4 rounded-lg mt-2">
                        <Text className="text-base">Culturals</Text>
                        <Text className="text-xs">2nd and 4th year Students</Text>
                    </View>
                    <View className="bg-teal-100 p-4 rounded-lg mt-2">
                        <Text className="text-base">Sports Day</Text>
                        <Text className="text-xs">
                            Prize distribution for winning and participating students
                        </Text>
                        <Text className="text-xs text-gray-500 mt-1">09/10/2023</Text>
                    </View>
                </View>

                <View className="mt-4 px-4 pb-4">
                    <View className='flex-row justify-between items-center'>
                        <Text className="text-xl font-semibold">Submission Task</Text>
                        <Text className="text-xs text-blue-500 mt-1">See All</Text>
                    </View>
                    <View className="bg-teal-100 p-4 rounded-lg mt-2">
                        <Text className="text-base">Problem Solving</Text>
                        <Text className="text-xs">Cryptography & Network Security</Text>
                        <Text className="text-xs text-gray-500 mt-1">09/10/2023</Text>
                    </View>
                    <View className="bg-purple-200 p-4 rounded-lg mt-2">
                        <Text className="text-base">Guest OS Installation</Text>
                        <Text className="text-xs">Cloud Computing</Text>
                        <Text className="text-xs text-gray-500 mt-1">09/10/2023</Text>
                    </View>
                    <View className="bg-teal-100 p-4 rounded-lg mt-2">
                        <Text className="text-base">Case Study</Text>
                        <Text className="text-xs">Software Project Management</Text>
                        <Text className="text-xs text-gray-500 mt-1">09/10/2023</Text>
                    </View>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
};


export default Dashboard;

NativeWindStyleSheet.create({
    // Your custom styles
});
