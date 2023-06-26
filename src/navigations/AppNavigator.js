import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Detail from '../screens/Detail';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import { StatusBar } from 'react-native';
import colors from '../consts/colors';
import NavigationBottom from '../common/NavigationBottom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';

const Stack = createStackNavigator();
const getWidth = () =>{
  let width = Dimensions.get('screen').width
  //horizontal padding = 20
  width = width - 40

  return width / 5
}
const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <NavigationBottom />
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      {/* <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator> */}
     
    </NavigationContainer>
  );
};

export default AppNavigator;
