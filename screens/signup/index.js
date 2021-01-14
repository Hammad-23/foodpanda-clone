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
import { useState } from "react";
import { AsyncStorage } from "react-native";

export default function SignUp({navigation}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  let profileInfo = {
    fullName,
    email,
    number,
    password,
  };

  const register = () => {
    console.log(profileInfo);
    AsyncStorage.setItem("userInfo", JSON.stringify(profileInfo));
    navigation.navigate('LogIn')

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input}>
        <Input
          onChange={(value) => {
            setFullName(value);
          }}
          placeholder="Enter Your FullName"
        />
      </View>
      <View style={styles.input}>
        <Input
          onChange={(value) => {
            setEmail(value);
          }}
          placeholder="Enter Your Email"
        />
      </View>
      <View style={styles.input}>
        <Input
          onChange={(value) => {
            setNumber(value);
          }}
          keyboardType="numeric"
          placeholder="Enter Your Number "
        />
      </View>
      <View style={styles.input}>
        <Input
          onChange={(value) => {
            setPassword(value);
          }}
          secure={true}
          placeholder="Enter Your Password"
        />
      </View>
      <View style={styles.btn}>
        <AppButton onPress={register} title="Sign Up" />
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
