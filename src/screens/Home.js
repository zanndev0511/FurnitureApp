import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  Image,
} from "react-native";
import colors from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import furnitures from "../consts/funitures";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width / 2 - 30;

const Home = ({ navigation }) => {
  const categories = ["POPULAR", "PRODUCT", "COLLECTION", "INSPIRATION CORNER"];
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCategoryIndex(index)}
              activeOpacity={0.8}>
              <Text
                style={[
                  style.categoryText,
                  categoryIndex == index && style.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  const Card = ({ furniture }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", furniture)}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: furniture.like
                  ? "rgba(245, 42, 42, 0.2)"
                  : "rgba(0,0,0,0.2)",
              }}>
              <Icon
                name="cards-heart"
                size={18}
                color={furniture.like ? colors.red : colors.dark}
              />
            </View>
          </View>
          <View style={{ height: 100, alignItems: "center" }}>
            <Image
              style={{ flex: 1, resizeMode: "contain" }}
              source={furniture.img}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {furniture.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              ${furniture.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: colors.green,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text
                style={{
                  fontSize: 19,
                  color: colors.white,
                  fontWeight: "bold",
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
          <Icon
            name="magnify"
            color={colors.dark}
            size={25}
            style={{ marginLeft: 20 }}
          />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={colors.white} />
        </View>
      </View>
      <CategoryList />
      <View style={style.flatlist}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={furnitures}
          renderItem={({ item }) => {
            return <Card furniture={item} />;
          }}
        />
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
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
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

export default Home;
