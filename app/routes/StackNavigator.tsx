import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookmarkModel, HomeModel, ExternalProgressModel, InboxModel, ProfileScreenModel, CommunicationModel } from "../viewModels";
import MainTab from './TabNavigator';
import ChangePasswordModel from '../viewModels/ChangePasswordModel';

type Abc = {
    Home: undefined;
    BookMark: undefined;
    Explore: undefined;
    Details: undefined;
    TAB: undefined;
    External: undefined;
    External2: undefined;
    External3: undefined;
    External4: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TAB" component={MainTab}></Stack.Screen>
                <Stack.Screen name="External" component={ExternalProgressModel} />
                <Stack.Screen name="External2" component={ChangePasswordModel} />
                <Stack.Screen name="External3" component={ProfileScreenModel} />
                <Stack.Screen name="External4" component={CommunicationModel} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;