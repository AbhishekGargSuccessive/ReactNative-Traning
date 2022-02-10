import React from 'react';
import CustomDrawer from '../views/Drawer_Navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTab from './Tab_Navigator/TabNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

const MainDrawer = ({navigation}: any) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {width: '70%'},
        overlayColor: 'none',
      }}>
      <Drawer.Screen name="Tab" component={MainTab} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
