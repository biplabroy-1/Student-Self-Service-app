import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native';

const ClassScheduleScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [todaysClasses, setTodaysClasses] = useState([]);

    // Helper function to get today's classes (mocked data)
    const getTodaysClasses = () => {
        // Replace with actual data fetching logic
        const classes = [
            { course: 'Data Structures', time: '9:00 - 10:00' },
            { course: 'Algorithms', time: '10:00 - 11:00' },
            { course: 'React Native', time: '11:00 - 12:00' },
        ];
        return classes;
    };

    // Function to handle refresh
    const handleRefresh = () => {
        setRefreshing(true);

        // Simulate fetching data asynchronously
        setTimeout(() => {
            const refreshedClasses = getTodaysClasses();
            setTodaysClasses(refreshedClasses);
            setRefreshing(false);
        }, 2000); // Simulating a 2 second delay for data fetching
    };

    // Initial load of today's classes
    useState(() => {
        const classes = getTodaysClasses();
        setTodaysClasses(classes);
    }, []);

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    colors={['#9Bd35A', '#689F38']}
                />
            }
        >
            {todaysClasses.length > 0 ? (
                todaysClasses.map((item, index) => (
                    <View key={index} style={styles.classItem}>
                        <Text style={styles.course}>{item.course}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                ))
            ) : (
                <View style={styles.emptyState}>
                    <Text>No classes today 🎉</Text>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    classItem: {
        backgroundColor: '#E0E0E0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    course: {
        fontSize: 18,
    },
    time: {
        fontSize: 14,
        color: '#757575',
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ClassScheduleScreen;
