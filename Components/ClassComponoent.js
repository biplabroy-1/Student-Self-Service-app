import React from 'react'
import { View, Text, ScrollView } from "react-native";
import Classes from '../assets/class.json'

function ClassComponoent() {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const todayName = daysOfWeek[today.getDay()];

    const getTodaysClasses = (classes) => {
        // Assuming classes array contains a single object
        const todayClasses = classes[todayName] || [];
        return todayClasses;
    };

    const todaysClasses = getTodaysClasses(Classes);


    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} className="mt-2">
            <View className="flex-row">
                {todaysClasses.length > 0 ? (
                    todaysClasses.map((item, index) => (
                        <View key={index} className="bg-teal-100 p-2 rounded-lg mr-2 justify-around">
                            <Text className="text-base font-bold h-8">{item.course}</Text>
                            <Text className="text-base">{item.teacher}</Text>
                            <Text className="text-base font-extrabold text-blue-800">{item.time}</Text>
                        </View>
                    ))
                ) : (
                    <View className="bg-gray-200 p-4 rounded-lg">
                        <Text className="text-base text-center">Yehhhhh! No class today 🎉</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

export default ClassComponoent;