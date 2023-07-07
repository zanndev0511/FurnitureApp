import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import reducers from '../redux/reducers/Reducers'
import colors from '../consts/colors';
import { useSelector } from 'react-redux';
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width / 2 - 30;

const CartItem = ({ cartItem }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", cartItem)}
      >
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
           
          </View>
          <View style={{ height: 100, alignItems: "center" }}>
            <Image
              style={{ flex: 1, resizeMode: "contain" }}
              source={cartItem.img}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {cartItem.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              ${cartItem.price}
            </Text>
           
          </View>
        </View>
      </TouchableOpacity>
    );
  };
const Cart = () => {
    const [cartList, setCartList] = useState([])
    const cartData = useSelector(state => state.reducers)
    
  return (
    <View style={{flex: 1}}>
      <FlatList data={cartData}
      renderItem={({item, index}) => {
        return(
            <CartItem cartItem={item}/>
        )
      }}/>
    </View>
  )
}
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
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.dark,
      flex: 1,
    },
    sortBtn: {
      marginLeft: 10,
      height: 50,
      width: 50,
      backgroundColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    categoryContainer: {
      position: "relative",
      height: 30,
      flexDirection: "row",
      marginTop: 20,
      marginBottom: 30,
      justifyContent: "space-between",
    },
    categoryText: {
      fontSize: 16,
      color: "gray",
      fontWeight: "bold",
      marginHorizontal: 10,
    },
    categoryTextSelected: {
      color: colors.green,
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: colors.green,
    },
    card: {
      height: 225,
      backgroundColor: colors.light,
      width,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
    },
    flatlist: {
      height: "67%",
    },
  });
export default Cart