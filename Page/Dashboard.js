import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "../Components/Navbar";
import ClassComponoent from "../Components/ClassComponoent";
import { NativeWindStyleSheet } from "nativewind";
import * as Progress from 'react-native-progress';



const Dashboard = () => {
    const [Percent, setPercent] = useState(0)

    const added = () => {
        setPercent(Math.floor((Math.random() * 100) + 1))
    }





    const Attendence = [
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
        {
            subject: "IBMTHE",
            percentage: "71%",
            attended: 32,
            total: 45
        },
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
    ]

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="bg-white">
                <Navbar />
                <View className="mt-4 px-4">
                    <Text className="text-xl font-semibold">Class</Text>
                    <ClassComponoent />
                </View>

                <View className="mt-4 px-4">
                    <Text className="text-xl font-semibold" onPress={added}>Attendance</Text>
                    <View className="bg-teal-100 p-4 rounded-lg mt-2">
                        <View className='flex-row justify-between items-center'>
                            <Text className="text-lg font-semibold">Subjects</Text>
                            <Text className="text-xs mt-2">Oct - Sep 2023</Text>
                        </View>
                        <View className='mt-2 flex-row justify-between items-center'>
                            <View className="">
                                {Attendence.map((item, index) => (
                                    <Text key={index} className="text-base my-1">
                                        {item.subject} - ({item.attended}/{item.total}){" "}
                                        {item.percentage}
                                    </Text>
                                ))}
                            </View>
                            <View className='items-center '>
                                <Progress.Pie size={130} progress={Percent / 100} thickness={10} color={Percent <= 40 ? 'red' : '' || Percent >= 80 ? 'green' : 'blue'} showsText='true' />
                                <Text className={`text-3xl mt-4 font-bold ${Percent <= 40 ? ' text-red-700' : '' || Percent >= 80 ? 'text-green-700' : 'text-blue-700'}`}>{Percent} %</Text>
                            </View>
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
