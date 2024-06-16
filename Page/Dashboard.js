import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../Components/Navbar";
import { NativeWindStyleSheet } from "nativewind";


const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView className="bg-white">
                <Navbar />
                <View className="mt-4 px-4">
                    <Text className="text-xl font-semibold">Today Class</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} className="mt-2">
                        <View className="flex-row">
                            {[
                                { title: 'Cryptography & Network System', time: '8:00 - 8:50 AM' },
                                { title: 'Cloud Computing', time: '8:50 - 9:40 AM' },
                                { title: 'Data Structures', time: '9:50 - 10:40 AM' },
                                { title: 'Operating Systems', time: '10:50 - 11:40 AM' },
                                { title: 'Software Engineering', time: '12:00 - 12:50 PM' },
                                { title: 'Database Management', time: '1:00 - 1:50 PM' }
                            ].map((item, index) => (
                                <View key={index} className="bg-teal-100 p-2 rounded-lg mr-2 w-48 h-20  justify-around">
                                    <Text className="text-base" numberOfLines={1}>{item.title}</Text>
                                    <Text className="text-sm text-blue-800">{item.time}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                <View className="mt-4 px-4">
                    <Text className="text-xl font-semibold">Attendance</Text>
                    <View className="bg-teal-100 p-4 rounded-lg mt-2">
                        <Text className="text-lg font-semibold">Subjects</Text>
                        <Text className="text-xs mt-2">Oct - Sep 2023</Text>
                        <View className="mt-2">
                            {[
                                {
                                    subject: "OBM752",
                                    percentage: "71%",
                                    attended: 32,
                                    total: 45,
                                },
                                {
                                    subject: "MG8591",
                                    percentage: "84%",
                                    attended: 26,
                                    total: 31,
                                },
                                {
                                    subject: "IT8761",
                                    percentage: "71%",
                                    attended: 10,
                                    total: 14,
                                },
                                {
                                    subject: "IT8711",
                                    percentage: "100%",
                                    attended: 11,
                                    total: 11,
                                },
                                {
                                    subject: "IT8075",
                                    percentage: "71%",
                                    attended: 32,
                                    total: 45,
                                },
                                { subject: "IBM", percentage: "71%", attended: 32, total: 45 },
                                {
                                    subject: "DMI001",
                                    percentage: "71%",
                                    attended: 32,
                                    total: 45,
                                },
                                {
                                    subject: "CS8792",
                                    percentage: "71%",
                                    attended: 32,
                                    total: 45,
                                },
                                {
                                    subject: "CS8791",
                                    percentage: "94%",
                                    attended: 34,
                                    total: 36,
                                },
                            ].map((item, index) => (
                                <Text key={index} className="text-xs mt-1">
                                    {item.subject} - ({item.attended}/{item.total}){" "}
                                    {item.percentage}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>

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

                <View className="mt-4 px-4 pb-10">
                    <Text className="text-xl font-semibold">Submission Task</Text>
                    <Text className="text-xs text-blue-500 mt-1">See All</Text>
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
