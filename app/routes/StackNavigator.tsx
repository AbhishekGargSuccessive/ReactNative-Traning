import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookmarkModel, ExploreModel, DetailsModel, HomeModel, StripeModel } from "../viewModels";

type Abc = {
    Home: undefined;
    BookMark: undefined;
    Explore: undefined;
    Details: undefined;
    Stripe: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Stripe" component={StripeModel}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;