import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BookmarkModel,
  ExploreModel,
  DetailsModel,
  HomeModel,
  LogInViewModel,
} from '../viewModels';

type Abc = {
  Home: Function;
  BookMark: Function;
  Explore: Function;
  Details: Function;
  Login: Function;
};

const Stack = createNativeStackNavigator<Abc>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LogInViewModel}></Stack.Screen>
        {/* <Stack.Screen name="Home" component={HomeModel}></Stack.Screen> */}
        <Stack.Screen name="BookMark" component={BookmarkModel}></Stack.Screen>
        {/* <Stack.Screen name="Explore" component={ExploreModel}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsModel}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
