import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookmarkModel, ExploreModel, DetailsModel, HomeModel, ScreenModel } from "../viewModels";

type Abc = {
    Home: undefined;
    BookMark: undefined;
    Explore: undefined;
    Details: undefined;
    SignUp: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignUp'>
                <Stack.Screen name="Home" component={HomeModel}></Stack.Screen>
                <Stack.Screen name="BookMark" component={BookmarkModel}></Stack.Screen>
                <Stack.Screen name="Explore" component={ExploreModel}></Stack.Screen>
                <Stack.Screen name="Details" component={DetailsModel}></Stack.Screen>
                <Stack.Screen name="SignUp" component={ScreenModel}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;