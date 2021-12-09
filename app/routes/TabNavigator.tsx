import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BookmarkModel, ExploreModel, DetailsModel, HomeModel, CourseModel } from "../viewModels";
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
        <Tab.Navigator screenOptions={{ tabBarStyle: { height: 60 } }}>
            <Tab.Screen
                name="Home"
                component={CourseModel}
                options={{
                    headerStyle: { backgroundColor: 'teal' },
                    headerTitle: () => (<Header />),
                    headerRight: () => (<Help />),
                    tabBarLabelStyle: { fontSize: 13 },
                    tabBarLabelPosition: 'below-icon',
                    headerStatusBarHeight: 10,
                    tabBarIcon: () => {
                        return (
                            <Home />
                        );
                    }
                }}
            />

            <Tab.Screen
                name="Progress"
                component={DetailsModel}
                options={{
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: () => {
                        return (
                            <Progress />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Inbox"
                component={ExploreModel}
                options={{
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: () => {
                        return (
                            <Inbox />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Settings"
                component={BookmarkModel}
                options={{
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: () => {
                        return (
                            <Settings />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTab;