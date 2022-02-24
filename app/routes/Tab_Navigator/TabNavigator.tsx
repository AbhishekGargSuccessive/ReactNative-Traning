import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeModel,
  MyCartModel,
  NotificationTabModel,
  MyOrdersModel,
} from '../../viewModels';
import {Image, Text, View} from 'react-native';
import {COLORS, constants, icons} from '../../constants';
import styles from './styles';

const Tab = createBottomTabNavigator();

const MainTab = ({navigation}: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
                    {constants.screens.home}
                  </Text>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
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
                  source={icons.search}
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
                    {constants.screens.search}
                  </Text>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyCart"
        component={MyCartModel}
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
                  source={icons.cart}
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
                    {constants.screens.cart}
                  </Text>
                )}
              </View>
            );
          },
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={MyOrdersModel}
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
                  source={icons.favourite}
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
                    {constants.screens.favourite}
                  </Text>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationTabModel}
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
                  source={icons.notification}
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
                    {constants.screens.notification}
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
