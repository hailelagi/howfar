import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function App() {
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
              <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
