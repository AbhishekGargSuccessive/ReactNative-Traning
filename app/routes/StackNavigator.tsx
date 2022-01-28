import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingModel, SignInModel, SignUpModel } from "../viewModels";

type Abc = {
    Onboarding: undefined;
    SignIn: undefined
    SignUp: undefined
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Onboarding' component={OnboardingModel} />
                <Stack.Screen name='SignIn' component={SignInModel} />
                <Stack.Screen name='SignUp' component={SignUpModel} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;