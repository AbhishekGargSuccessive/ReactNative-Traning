import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CourseModel, InboxModel, ProgressModel, SettingsModel } from "../viewModels";
import { Header, Help } from '../components/Logo';
import { Home, Inbox, Progress, Settings } from '../assets/images/images';


type Tabprops = {
    Home: undefined;
    Progress: undefined;
    Inbox: undefined;
    Settings: undefined;
}

const Tab = createBottomTabNavigator<Tabprops>()

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { height: 55 },
            tabBarLabelStyle: { fontSize: 13, padding: 3 },
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: 'black',
            headerStatusBarHeight: 10,
            headerStyle: { backgroundColor: 'teal' }
        }}>
            <Tab.Screen
                name="Home"
                component={CourseModel}
                options={{
                    headerTitle: () => (<Header />),
                    headerRight: () => (<Help />),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Home focused={focused} />
                        );
                    }
                }}
            />

            <Tab.Screen
                name="Progress"
                component={ProgressModel}
                options={{
                    headerTitle: () => (<Header />),
                    headerRight: () => (<Help />),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Progress focused={focused} />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Inbox"
                component={InboxModel}
                options={{
                    headerTitle: () => (<Header />),
                    headerRight: () => (<Help />),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Inbox focused={focused} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsModel}
                options={{
                    headerTitle: () => (<Header />),
                    headerRight: () => (<Help />),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Settings focused={focused} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTab;