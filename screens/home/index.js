import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  return (
    <>
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.first}>
          <Image
            style={styles.img}
            source={require("../../assets/images/thali.png")}
          />
        </View>
        <View style={styles.textConatiner}>
          <Text style={styles.text}>Good Evening, Syed</Text>
          <Text style={styles.secondLineText}>
            There are 411 restaurants in your area,
          </Text>
          <Text>Go and Checkout Your Food</Text>
        </View>
        <View style={styles.restaurantCardContainer}>
          <TouchableOpacity onPress={()=>{navigation.navigate("RestaurantsDelivery");}} style={styles.restaurants}>
            <View>
              <Text style={styles.resText}>Food Delivery</Text>
            </View>
            <View>
              <Image
                style={styles.img1}
                source={require("../../assets/images/biryani2.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.lastRow}>
          <TouchableOpacity style={styles.Pick}>
            <View>
              <Text style={styles.resText}>Shops</Text>
            </View>
            <View>
              <Image
                style={styles.img2}
                source={require("../../assets/images/burger2.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Pick}>
            <View>
              <Text style={styles.resText}>Pick-Up</Text>
            </View>
            <View>
              <Image
                style={styles.img2}
                source={require("../../assets/images/burger.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {},
  img: {
    width: 200,
    height: 150,
  },
  img1: {
    width: 150,
    height: 120,
  },
  first: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textConatiner: {
    marginTop: 10,
    marginLeft: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "200",
    fontFamily: "sans-serif",
  },
  secondLineText: {
    marginTop: 10,
  },
  restaurants: {
    backgroundColor: "#b00e39",
    width: 340,
    height: 180,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  restaurantCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  Pick: {
    backgroundColor: "#0c0b30",
    width: 170,
    height: 150,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img2: {
    width: 60,
    height: 60,
  },
  lastRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  resText: {
    color: "white",
    fontSize: 20,
    fontWeight: "200",
  },
});
