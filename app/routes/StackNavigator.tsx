import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookmarkModel, ExploreModel, DetailsModel, HomeModel, RazorPayModel } from "../viewModels";

type Abc = {
    Home: undefined;
    BookMark: undefined;
    Explore: undefined;
    Details: undefined;
    RazorPay: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="RazorPay" component={RazorPayModel}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;