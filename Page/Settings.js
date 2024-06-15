// Example in Settings.js
import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Settings({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button
                title="Go to Dashboard"
                onPress={() => navigation.navigate('DashboardTab')}
            />
        </View>
    );
}

export default Settings;
