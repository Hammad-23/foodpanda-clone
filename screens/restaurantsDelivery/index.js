import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Input from "../../components/input";
import { color } from "react-native-reanimated";

function RestaurantsDelivery({ navigation }) {
  let card = [
    {
      text: "Burgers",
      cardImg: require("../../assets/images/burger2.png"),
    },
    {
      text: "Biryani",
      cardImg: require("../../assets/images/biryani2.png"),
    },
    {
      text: "Fast-Food",
      cardImg: require("../../assets/images/fastfood.png"),
    },
    {
      text: "Home-Food",
      cardImg: require("../../assets/images/homefood.png"),
    },
    {
      text: "Fries",
      cardImg: require("../../assets/images/fries2.png"),
    },
    {
      text: "Beverages",
      cardImg: require("../../assets/images/beverages.png"),
    },
    {
      text: "Juice",
      cardImg: require("../../assets/images/juice.png"),
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
    {
      name: "Kaybees Restaurant & Grill",
      imgRestaurant: require("../../assets/products/res5.jpg"),
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
                <Image style={styles.img2} source={item.cardImg} />
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
              <Image
                onStartShouldSetResponder={() => {
                  navigation.navigate("Restaurant View", {
                    item,
                  });
                }}
                style={styles.resImg}
                source={item.imgRestaurant}
              />
              <Text style={styles.nameRes}>{item.name}</Text>
              <Text>Rs 500 minimum : Free Delivery</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.ditex}>
        <Text style={styles.resTex}>New On FoodPanda</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.rowRes}
      >
        {restaurant.map((item) => {
          return (
            <View style={styles.restaurantRow}>
              <Image
                onStartShouldSetResponder={() => {
                  navigation.navigate("Restaurant View", {
                    item,
                  });
                }}
                style={styles.resImg}
                source={item.imgRestaurant}
              />
              <Text style={styles.nameRes}>{item.name}</Text>
              <Text>Rs 500 minimum : Free Delivery</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.ditex}>
        <Text style={styles.resTex}>Double Deals</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.rowRes}
      >
        {restaurant.map((item) => {
          return (
            <View style={styles.restaurantRow}>
              <Image
                onStartShouldSetResponder={() => {
                  navigation.navigate("Restaurant View", {
                    item,
                  });
                }}
                style={styles.resImg}
                source={item.imgRestaurant}
              />
              <Text style={styles.nameRes}>{item.name}</Text>
              <Text>Rs 500 minimum : Free Delivery</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.ditex}>
        <Text style={styles.resTex}>All Restaurants</Text>
      </View>
      <View style={styles.allRes}>
        {restaurant.map((item) => {
          return (
            <View style={styles.restaurantCol}>
              <Image
                onStartShouldSetResponder={() => {
                  navigation.navigate("Restaurant View", {
                    item,
                  });
                }}
                style={styles.resImgCol}
                source={item.imgRestaurant}
              />
              <Text style={styles.nameRes}>{item.name}</Text>
              <Text>Rs 500 minimum : Free Delivery</Text>
            </View>
          );
        })}
      </View>
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
    // backgroundColor: "grey",
    height: 60,
    width: 60,
    // borderRadius: 12,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: "#00000010",
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
  restaurantCol: {
    marginTop: 20,
  },
  resImgCol: {
    width: 330,
    height: 200,
    borderRadius: 12,
  },
  allRes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
