import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

function Attendence() {
    const [averagePercent, setAveragePercent] = useState(0);
    const Attendence = [
        {
            subject: 'OBM752',
            percentage: 71,
            attended: 32,
            total: 45,
        },
        {
            subject: 'MG8591',
            percentage: 84,
            attended: 26,
            total: 31,
        },
        {
            subject: 'IT8761',
            percentage: 71,
            attended: 10,
            total: 14,
        },
        {
            subject: 'IT8711',
            percentage: 100,
            attended: 11,
            total: 11,
        },
        {
            subject: 'IT8075',
            percentage: 71,
            attended: 32,
            total: 45,
        },
        {
            subject: 'IBMTHE',
            percentage: 71,
            attended: 32,
            total: 45,
        },
        {
            subject: 'DMI001',
            percentage: 71,
            attended: 32,
            total: 45,
        },
        {
            subject: 'CS8792',
            percentage: 71,
            attended: 32,
            total: 45,
        },
        {
            subject: 'CS8791',
            percentage: 94,
            attended: 34,
            total: 36,
        },
    ];

    useEffect(() => {
        const totalPercent = Attendence.reduce((acc, item) => acc + item.percentage, 0);
        const avgPercent = totalPercent / Attendence.length;
        setAveragePercent(avgPercent);
    }, [Attendence]);

    return (
        <View className="mt-4 px-4">
            <Text className="text-xl font-semibold">Attendance</Text>
            <View className="bg-teal-100 p-4 rounded-lg mt-2">
                <View className='flex-row justify-between items-center'>
                    <Text className="text-lg font-semibold">Subjects</Text>
                    <Text className="text-xs mt-2">Oct - Sep 2023</Text>
                </View>
                <View className='mt-2 flex-row justify-between items-center'>
                    <View className="">
                        {Attendence.map((item, index) => (
                            <Text key={index} className="text-base my-1">
                                {item.subject} - ({item.attended}/{item.total}) {item.percentage}%
                            </Text>
                        ))}
                    </View>
                    <View className='items-center '>
                        <Progress.Pie size={130} progress={averagePercent.toFixed(2) / 100} thickness={10} color={averagePercent <= 40 ? 'red' : '' || averagePercent >= 80 ? 'green' : 'blue'} showsText='true' />
                        <Text className={`text-3xl mt-4 font-bold ${averagePercent <= 40 ? ' text-red-700' : '' || averagePercent >= 80 ? 'text-green-700' : 'text-blue-700'}`}>{averagePercent.toFixed(2)} %</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Attendence;
