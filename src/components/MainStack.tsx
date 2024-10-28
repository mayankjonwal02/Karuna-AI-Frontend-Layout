import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./auth/LoginScreen";
import { ProfileScreen } from "./profile/ProfileScreen";
import { ChatScreen } from "./chat/ChatScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7c3aed",
        },
        headerTintColor: "white",
        headerShown: true,
      }}
    >
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Complete Profile" }}
      />
      <StackNavigator.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: "Messages" }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);