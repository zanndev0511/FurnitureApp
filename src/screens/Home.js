import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import colors from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
      }}>
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, fontWeight: "bold", color: colors.green }}>
            Furniture Shop
          </Text>
        </View>
        <Icon name="cart" color={colors.dark} size={28} />
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={style.searchContainer}>
          <Icon name="magnify" color={colors.dark} size={25} style={{ marginLeft: 20, }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={colors.white}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
    flex: 1
  },
  sortBtn:{
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});

export default Home;
