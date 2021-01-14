import React from 'react'
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
  
  export default function SignUp() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.input}>
          <Input placeholder="Enter Your FullName" />
        </View>
        <View style={styles.input}>
          <Input placeholder="Enter Your Email" />
        </View>
        <View style={styles.input}>
          <Input keyboardType="numeric" placeholder="Enter Your Number " />
        </View>
        <View style={styles.input}>
          <Input secure={true} placeholder="Enter Your Password" />
        </View>
        <View style={styles.btn}>
          <AppButton title="Sign Up" />
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
      width:320
    },
    btn: {
        marginTop:30
    }
  });
  