import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import reducers from '../redux/reducers/Reducers';
import colors from '../consts/colors';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width / 2 - 30;

const CartItem = ({ cartItem }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', cartItem)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: colors.white,
          marginVertical: 5,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Image
            style={{
              height: 100,
              width: 100,
              resizeMode: 'contain',
              marginHorizontal: 15,
              marginVertical: 15,
            }}
            source={cartItem.img}
          />
        </View>
        <View style={{ flex: 1, position: 'absolute', marginLeft: 130 }}>
          <Text
            style={{ flex: 1, fontWeight: 'bold', fontSize: 20, marginTop: 15 }}
          >
            {cartItem.name}
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 5,
              color: colors.red,
            }}
          >
            ${cartItem.price}
          </Text><View style={{ flexDirection: 'row', marginTop: 5}}>
          <View style={style.borderBtn}>
            <Text style={style.borderBtnText}>-</Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}
          >
            1
          </Text>
          <View style={style.borderBtn}>
            <Text style={style.borderBtnText}>+</Text>
          </View>
        </View>
        </View>
        
      </View>
    </TouchableOpacity>
  );
};
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers);

  return (
    <View style={{ flex: 1, marginVertical: 15 }}>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return <CartItem cartItem={item} />;
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    position: 'relative',
    height: 30,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
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
    height: '67%',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  borderBtn: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Cart;
