import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../views/PushNotification/PushNotification';

type Abc = {
    Home: undefined;
    BookMark: undefined;
    Explore: undefined;
    Details: undefined;
    Notification: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Notification" component={Notification}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;