import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import BubbleSignIn from "./components/BubbleSignIn";
import HomeScreen from "./components/Home";
import ProfileScreen from "./components/Profile";
import ChatScreen from "./components/Chat";
import DiscoverScreen from "./components/Discover";
import Home from "./components/Home";
import { enableScreens } from 'react-native-screens';

// screen rendering optimization
enableScreens();

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
let authenticated = true
let hasId = false

export default function App() {
    if (authenticated) {
        return (
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'welcome back!',
                        headerStyle: {
                            backgroundColor: '#6986ED',
                        },
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {

                        },
                    }}
                />
                <Stack.Screen
                    name="BubbleSignIn"
                    component={BubbleSignIn}
                    options={{
                        title: 'Chat anonymously :)',
                        headerStyle: {
                            backgroundColor: '#6986ED',
                        },
                        headerTintColor: '#ffffff',
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'hop on board to get started!',
                        headerStyle: {
                            backgroundColor: '#6986ED',
                        },
                        headerTintColor: '#ffffff',
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#6986ED',
                        },
                        headerTintColor: '#ffffff',
                    }}
                />
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Discover" component={DiscoverScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
              <Tab.Screen name="Chat" component={ChatScreen} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}
