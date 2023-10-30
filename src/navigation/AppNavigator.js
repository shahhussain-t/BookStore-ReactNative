import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookListScreen from '../screens/BookListScreen';
import BookDeatilsScreen from '../screens/BookDeatilsScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="BookListScreen" component={BookListScreen} />
                <Stack.Screen name="BookDetailsScreen" component={BookDeatilsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;