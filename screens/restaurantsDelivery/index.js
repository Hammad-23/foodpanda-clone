import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Input from "../../components/input";
import { color } from "react-native-reanimated";

function RestaurantsDelivery() {
  let card = [
    {
      text: "Burgers",
    },
    {
      text: "Biryani",
    },
    {
      text: "Fast-Food",
    },
    {
      text: "Home-Food",
    },
    {
      text: "Fries",
    },
    {
      text: "Beverages",
    },
    {
      text: "Juice",
    },
  ];

  let restaurant = [
    {
      name: "Al Madina Restaurant & Grill",
      imgRestaurant: require("../../assets/products/res1.jpg"),
    },
    {
      name: "Al Shahzaib Restaurant",
      imgRestaurant: require("../../assets/products/res2.jpg"),
    },
    {
        name: "KabaJees Restaurant & Grill",
        imgRestaurant: require("../../assets/products/res3.jpg"),
      },
      {
        name: "Kaybees Restaurant & Grill",
        imgRestaurant: require("../../assets/products/res4.jpg"),
      },
  ];
  return (
    <ScrollView>
      <View style={styles.inpRow}>
        <View>
          <Input placeholder=" Search Your Food" />
        </View>
        <View>
          <TouchableOpacity style={styles.filter}>
            <AntDesign name="bars" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.cardsInRow}
      >
        {card.map((item) => {
          return (
            <TouchableOpacity style={styles.Pick}>
              <View>
                <Text style={styles.food}>{item.text}</Text>
              </View>
              <View>
                <Image
                  style={styles.img2}
                  source={require("../../assets/images/burger2.png")}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.ditex}>
        <Text style={styles.resTex}>Your Restaurants</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.rowRes}
      >
        {restaurant.map((item) => {
          return (
            <View style={styles.restaurantRow}>
              <Image style={styles.resImg} source={item.imgRestaurant} />
              <Text style={styles.nameRes}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}

export default RestaurantsDelivery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Pick: {
    backgroundColor: "#b81c5d",
    width: 130,
    height: 150,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 10,
  },
  food: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },
  filter: {
    backgroundColor: "grey",
    height: 60,
    width: 60,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inpRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  cardsInRow: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img2: {
    width: 60,
    height: 60,
  },
  resTex: {
    color: "black",
    fontSize: 20,
    fontWeight: "200",
  },
  ditex: {
    marginTop: 20,
    marginLeft: 10,
  },
  resImg: {
    width: 240,
    height: 170,
    borderRadius: 12,
  },
  nameRes: {
    fontSize: 18,
    fontWeight: "200",
    marginTop: 5,
  },
  rowRes: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  restaurantRow: {
    marginLeft: 10,
  },
});
