import React from "react";
import { TextInput, Text, StyleSheet } from "react-native";

function Input(props) {
  return (
    <>
      <TextInput placeholder={props.placeholder} style={styles.inp} />
    </>
  );
}

export default Input;

const styles = StyleSheet.create({
  inp: {
    height: 60,
    borderRadius: 12,
    borderColor: "#9ea8a7",
    borderWidth: 1,
    width: 250,
    maxWidth: 250,
    minWidth: 250,
    shadowColor:'grey',
    shadowOpacity:3
  },
});
