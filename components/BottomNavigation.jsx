import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CommonActions } from "@react-navigation/native";

import Home from "../screens/Home";
import Explore from "../screens/Explore";
import CreateQuest from "../screens/CreateQuest";
import Gems from "../screens/Gems";
import UserProfile from "../screens/UserProfile";

{
  /* Sources: 
    React Bottom Nav: https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/BottomNavigationBar
    Icon library: https://pictogrammers.com/library/mdi/ */
}

const Tab = createBottomTabNavigator();

const MyBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch(
                CommonActions.navigate({
                  name: route.name,
                })
              );
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="magnify" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="+ Quest"
        component={CreateQuest}
        options={{
          tabBarLabel: "+ Quest",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="plus" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Gems"
        component={Gems}
        options={{
          tabBarLabel: "Gems",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="diamond-stone" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomNavigation;
