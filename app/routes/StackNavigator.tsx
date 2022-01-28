import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingModel } from "../viewModels";

type Abc = {
    Onboarding: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Onboarding' component={OnboardingModel} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;