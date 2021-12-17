import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExternalProgressModel, ProfileScreenModel, CommunicationModel, ChangePasswordModel } from "../viewModels";
import MainTab from './TabNavigator';

type Abc = {
    TAB: undefined;
    External: undefined;
    ChangePassword: undefined;
    Profile: undefined;
    Communication: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TAB" component={MainTab}></Stack.Screen>
                <Stack.Screen name="External" component={ExternalProgressModel} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordModel} />
                <Stack.Screen name="Profile" component={ProfileScreenModel} />
                <Stack.Screen name="Communication" component={CommunicationModel} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;