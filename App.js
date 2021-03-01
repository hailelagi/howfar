import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const Stack = createStackNavigator();

/*
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SignIn}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

*/

export default function App() {
  return (
      <NavigationContainer>
        <SignUp />
      </NavigationContainer>
  );
}
