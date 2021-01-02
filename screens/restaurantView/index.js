import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import MyTabs from "../../navigations/topTabNavigator";

function RestaurantView(props) {
  console.log(props.route.params.item.name);
  let img = props.route.params.item.imgRestaurant;

  return (
    <ScrollView>
      <View>
        <Image style={styles.imgContainer} source={img} />
      </View>
      <MyTabs />
    </ScrollView>
  );
}
export default RestaurantView;

const styles = StyleSheet.create({
  imgContainer: {
    height: 200,
    width: "100%",
    opacity: 0.5,
  },
});
