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
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import Animated, {
  event,
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { removeFromCart } from '../redux/actions/Actions';
const width = Dimensions.get('screen').width / 2 - 30;

const CartItem = ({ cartItem, onRemoveItem, isWishList }) => {
  const leftSwipe = () => {
    return (
      <TouchableOpacity
        style={style.deleteBox}
        onPress={() => {
          onRemoveItem();
        }}
      >
        <Icon name="trash-can-outline" color={colors.white} size={30} />
      </TouchableOpacity>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={leftSwipe}>
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
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 15,
              }}
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
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
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
      </Swipeable>
    </GestureHandlerRootView>
  );
};
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers);
  console.log(cartData)

  const navigation = useNavigation();

  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, marginVertical: 15 }}>
      <View style={style.header}>
        <Icon
          name="arrow-left"
          size={28}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              cartItem={item}
              onRemoveItem={() => {
                dispatch(removeFromCart(index));
              }}
            />
          );
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
  header: {
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteBox: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginVertical: 5,
    marginLeft: 20,
    borderRadius: 10,
  },
});
export default Cart;
