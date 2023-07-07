import { View, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../consts/colors";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Register from "../screens/Register";
import Cart from "../screens/Cart";
import Animated from "react-native-reanimated";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const getWidth = () => {
  let width = Dimensions.get("screen").width;
  //horizontal padding = 20
  width = width - 40;

  return width / 5;
};

const NavigationBottom = () => {
  const Tab = createBottomTabNavigator();
  const data = useSelector((state) => state);
  // console.log(data);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.white,
          bottom: 35,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.dark,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <Icon
                name="home"
                color={focused ? colors.green : colors.dark}
                size={30}
              />
            </View>
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Detail"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <Icon
                name="cards-heart"
                color={focused ? colors.green : colors.dark}
                size={28}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: colors.red,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: -3,
                  right: -5,
                }}
              >
                <Text style={{ color: colors.white, fontWeight: "bold" }}>
                  {data.reducers2.length}
                </Text>
              </View>
            </View>
          ),
        }}
        component={Detail}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: colors.green,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <Icon name="shopping-outline" color={colors.white} size={30} />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: colors.red,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 13,
                  right: 13,
                }}
              >
                <Text style={{ color: colors.white, fontWeight: "bold" }}>
                {data.reducers.length}
                </Text>
              </View>
            </View>
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Detail2"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <Icon
                name="bell"
                color={focused ? colors.green : colors.dark}
                size={28}
              />
            </View>
          ),
        }}
        component={Register}
      />
      <Tab.Screen
        name="Detail3"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
              }}
            >
              <Icon
                name="account"
                color={focused ? colors.green : colors.dark}
                size={30}
              />
            </View>
          ),
        }}
        component={Register}
      />
    </Tab.Navigator>
  );
};

export default NavigationBottom;
