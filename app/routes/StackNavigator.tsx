import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookmarkModel, ExploreModel, DetailsModel, HomeModel, GoogleMapModel } from "../viewModels";

type Abc = {
    Home: undefined;
    BookMark: undefined;
    Explore: undefined;
    Details: undefined;
    Google_Map: undefined;
}

const Stack = createNativeStackNavigator<Abc>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeModel}></Stack.Screen>
                <Stack.Screen name="BookMark" component={BookmarkModel}></Stack.Screen>
                <Stack.Screen name="Explore" component={ExploreModel}></Stack.Screen>
                <Stack.Screen name="Details" component={DetailsModel}></Stack.Screen> */}
                <Stack.Screen name="Google_Map" component={GoogleMapModel}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;