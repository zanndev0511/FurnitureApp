import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../consts/colors';
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;

const Detail = ({ navigation, route }) => {
  const furniture = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={style.header}>
        <Icon name="arrow-left" size={28} onPress={() => navigation.goBack()} />
        <Icon name="cart" size={28} />
      </View>
      <View style={style.imageContainer}>
        <Swiper
          nextButton={<Text style={style.buttonText}>›</Text>}
          prevButton={<Text style={style.buttonText}>‹</Text>}
          activeDotColor={colors.green}
          showsButtons={true}
          autoplay={true}
          autoplayTimeout={3}>
          <Image source={furniture.img} style={style.image} />
          <Image source={furniture.img} style={style.image} />
          <Image source={furniture.img} style={style.image} />
        </Swiper>
      </View>
      <View style={style.detailContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Icon name="bookmark" size={22} color={colors.green} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best Choice</Text>
        </View>

        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            {furniture.name}
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: colors.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${furniture.price}
            </Text>
          </View>
        </View>

        <ScrollView style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 20,
            }}>
            {furniture.about}
          </Text>
        </ScrollView>
        <View
          style={{
            marginVertical: 5,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={style.borderBtn}>
              <Text style={style.borderBtnText}>-</Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}>
              1
            </Text>
            <View style={style.borderBtn}>
              <Text style={style.borderBtnText}>+</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={style.cartBtn}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                <Icon name="cart-plus" size={28}></Icon>
              </Text>
            </View>
            <View style={style.buyBtn}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 0.55,
    backgroundColor: colors.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  priceTag: {
    backgroundColor: colors.green,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  borderBtn: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  buyBtn: {
    width: 120,
    height: 50,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  cartBtn: {
    width: 80,
    height: 50,
    marginHorizontal: 5,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  wrapper: {},
  image: {
    width,
    flex: 1,
  },
  buttonText: {
    color: colors.green,
    fontSize: 50,
  },
});
export default Detail;
