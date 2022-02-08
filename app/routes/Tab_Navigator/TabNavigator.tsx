import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeModel} from '../../viewModels';
import {Image, Text, View} from 'react-native';
import {COLORS, constants, icons} from '../../constants';
import styles from './styles';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarstyle,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeModel}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.tabBarContainer,
                  {
                    backgroundColor: focused ? COLORS.primary : COLORS.white,
                    width: focused ? '160%' : '40%',
                  },
                ]}>
                <Image
                  source={icons.home}
                  style={[
                    styles.tabBarIcon,
                    {tintColor: focused ? COLORS.white : COLORS.darkGray},
                  ]}
                />
                {focused && (
                  <Text
                    style={[
                      styles.tabBarIconText,
                      {color: focused ? COLORS.white : COLORS.gray},
                    ]}>
                    {constants.keywords.Home}
                  </Text>
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
