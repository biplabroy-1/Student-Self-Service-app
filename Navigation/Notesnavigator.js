
import { createStackNavigator } from '@react-navigation/stack';
import SubjectsScreen from '../Page/SubjectsScreen'
import NotesScreen from '../Page/NotesScreen';

const Stack = createStackNavigator();

const Notesnavigator = () => {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
            headerShown: !["Subject"].includes(route.name),
        })}>
            <Stack.Screen name="Subject" component={SubjectsScreen} />
            <Stack.Screen name="PDFs" component={NotesScreen} />
        </Stack.Navigator>
    );
};

export default Notesnavigator;