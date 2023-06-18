import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import { StatusBar } from 'react-native';
import colors from '../consts/colors';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
