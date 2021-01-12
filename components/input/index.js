import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

function Input(props) {
  return (
    <View style={styles.cont}>
      <TextInput
        onChange={props.onChange}
        placeholder={props.placeholder}
        style={styles.inp}
        keyboardType = {props.keyboardType}
        secureTextEntry={props.secure}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inp: {
    fontSize: 15,
    paddingHorizontal: 16,
    height: 60,
    width: 250,
  },
  cont: {
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
  },
});
