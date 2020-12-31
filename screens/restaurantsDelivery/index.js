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
  return (
    <ScrollView>
      <View style={styles.inpRow}>
        <View>
          <Input placeholder=' Search Your Food' />
        </View>
        <View>
          <TouchableOpacity style={styles.filter}>
            <AntDesign name="bars" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.cardsInRow}>
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
    marginLeft:10
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
});
