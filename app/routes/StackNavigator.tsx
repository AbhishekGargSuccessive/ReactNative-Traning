import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainDrawer from './DrawerNavigator';
import {
  OnboardingModel,
  SignInModel,
  SignUpModel,
  OTPModel,
  PasswordModel,
  DetailModel,
  MyCartModel,
  MyCardsModel,
  AddNewCardModel,
  CheckoutModel,
  SuccessModel,
  DeliveryStatusModel,
  MyCouponModel,
  NotificationModel,
  SettingsModel,
  ChangePasswordModel,
  MyOrdersModel,
  RiderReviewModel,
  MyAccountModel,
  EditAccountModel,
} from '../viewModels';

type Abc = {
  Onboarding: Function;
  SignIn: Function;
  SignUp: Function;
  OTP: Function;
  Password: Function;
  Home: Function;
  Detail: Function;
  MyCart: Function;
  MyCards: Function;
  AddNewCard: Function;
  Checkout: Function;
  Success: Function;
  Drawer: Function;
  Delivery: Function;
  Coupon: Function;
  Notification: Function;
  Settings: Function;
  ChangePassword: Function;
  MyOrders: Function;
  RiderReview: Function;
  MyAccount: Function;
  EditAccount: Function;
};

const Stack = createNativeStackNavigator<Abc>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingModel} />
        <Stack.Screen name="SignIn" component={SignInModel} />
        <Stack.Screen name="SignUp" component={SignUpModel} />
        <Stack.Screen name="OTP" component={OTPModel} />
        <Stack.Screen name="Password" component={PasswordModel} />
        <Stack.Screen name="Detail" component={DetailModel} />
        <Stack.Screen name="MyCart" component={MyCartModel} />
        <Stack.Screen name="MyCards" component={MyCardsModel} />
        <Stack.Screen name="AddNewCard" component={AddNewCardModel} />
        <Stack.Screen name="Checkout" component={CheckoutModel} />
        <Stack.Screen name="Success" component={SuccessModel} />
        <Stack.Screen name="Drawer" component={MainDrawer} />
        <Stack.Screen name="Delivery" component={DeliveryStatusModel} />
        <Stack.Screen name="Coupon" component={MyCouponModel} />
        <Stack.Screen name="Notification" component={NotificationModel} />
        <Stack.Screen name="Settings" component={SettingsModel} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordModel} />
        <Stack.Screen name="MyOrders" component={MyOrdersModel} />
        <Stack.Screen name="RiderReview" component={RiderReviewModel} />
        <Stack.Screen name="MyAccount" component={MyAccountModel} />
        <Stack.Screen name="EditAccount" component={EditAccountModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
