import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import classData from '../assets/class.json'; // Adjust the path as per your project structure

const ClassRoutineList = () => {
    const [classRoutines, setClassRoutines] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data from a local JSON file
        const fetchData = async () => {
            try {
                // Replace with logic to fetch data from your backend if needed
                // For local JSON, you can directly set data
                setClassRoutines(classData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setLoading(false); // Ensure loading state is updated on error
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Handle case where classRoutines is null or undefined
    if (classRoutines) {
        return (
            <View style={styles.container}>
                <Text>No data available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Class Routine</Text>
            {classRoutines.map((dayRoutine, index) => (
                <View key={index} style={styles.dayContainer}>
                    <Text style={styles.dayHeading}>{dayRoutine.day}</Text>
                    {dayRoutine.schedule.map((scheduleItem, idx) => (
                        <View key={idx} style={styles.scheduleItem}>
                            <Text>Period: {scheduleItem.period}</Text>
                            <Text>Time: {scheduleItem.time}</Text>
                            <Text>Course: {scheduleItem.course}</Text>
                            <Text>Teacher: {scheduleItem.teacher}</Text>
                            <Text>Room: {scheduleItem.room}</Text>
                            <Text>Building: {scheduleItem.building}</Text>
                            <Text>Class: {scheduleItem.class}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    dayContainer: {
        marginBottom: 20,
    },
    dayHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scheduleItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
});

export default ClassRoutineList;
