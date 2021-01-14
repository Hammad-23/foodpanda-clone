import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View>
        <Text style={styles.firstHeading}>Welcome To FoodPanda</Text>
      </View>
      <View style={styles.secondDiv}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LogIn");
          }}
          style={styles.btnOne}
        >
          <Text style={styles.btnTxt}>Log IN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondDiv}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={styles.btnOne}
        >
          <Text style={styles.btnTxt}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  firstHeading: {
    color: "#b81c5d",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnOne: {
    backgroundColor: "#b81c5d",
    height: 70,
    width: 250,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  secondDiv: {
    marginTop: 20,
  },
  btnTxt: {
    color: "white",
    fontSize: 20,
  },
});
