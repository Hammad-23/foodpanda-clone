import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Input from "../../components/input";
import AppButton from "../../components/button";
import { useState } from "react/cjs/react.development";
import { AsyncStorage } from "react-native";

export default function LogIn({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const loginUser = async () => {
    try{
    const value = await AsyncStorage.getItem("userInfo");
    const data = JSON.parse(value);
    if (userEmail === data.email && userPass === data.password) {
      alert("Successfully Logged In");
      navigation.navigate("Home");
    } else {
      alert("LogIn error");
    }
  }catch (error){
    alert(error.message)
  }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input}>
        <Input
          onChange={(value) => {
            setUserEmail(value);
          }}
          placeholder="Enter Your Email"
        />
      </View>

      <View style={styles.input}>
        <Input
          onChange={(value) => {
            setUserPass(value);
          }}
          secure={true}
          placeholder="Enter Your Password"
        />
      </View>
      <View style={styles.btn}>
        <AppButton onPress={loginUser} title="Log In" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 20,
    width: 320,
  },
  btn: {
    marginTop: 30,
  },
});
