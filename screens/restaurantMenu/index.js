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

function RestaurantMenu() {
  let menu = [
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
    {
      dish: "Zinger Burger",
      dishImg: require("../../assets/images/burger2.png"),
    },
  ];
  return (
    <ScrollView>
      {menu.map((item) => {
        return (
          <View style={styles.dishRow}>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.dishHead}>{item.dish}</Text>
              <Text style={{ marginTop: 6 }}>
                Chicken,Mayo,Ketchup,Kentucky
              </Text>
            </View>
            <View style={{ marginRight: 20 }}>
              <Image style={styles.img2} source={item.dishImg} />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
export default RestaurantMenu;

const styles = StyleSheet.create({
  img2: {
    width: 60,
    height: 60,
  },
  dishRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    marginTop: 20,
    height: 80,
  },
  dishHead: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "sans-serif",
  },
});
