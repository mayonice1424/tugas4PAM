import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Globe from "../screens/Globe";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Globe"
        component={Globe}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="globe" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigation;
