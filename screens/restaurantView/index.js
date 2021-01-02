import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

function RestaurantView() {
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.imgContainer}
          source={require("../../assets/products/res3.jpg")}
        />
      </View>
    </ScrollView>
  );
}
export default RestaurantView;

const styles = StyleSheet.create({
  imgContainer: {
    height: 200,
    width: "100%",
    opacity:0.5
  },
});
