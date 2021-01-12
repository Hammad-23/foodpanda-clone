import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Home from "./screens/home";
import RestaurantsDelivery from "./screens/restaurantsDelivery";
import RestaurantView from "./screens/restaurantView";
import { AntDesign } from "@expo/vector-icons";
import MyDrawer from "./navigations/drawerNavigation";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import { openDrawer } from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./screens/profile";
import { DrawerActions } from "@react-navigation/drawer";
import LogIn from './screens/login'

export default function App({ navigation }) {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn">
          <Stack.Screen
            options={{
              headerLeft: () => (
                <AntDesign
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}
                  style={{ marginLeft: 10 }}
                  name="bars"
                  size={28}
                  color="black"
                />
              ),
              headerRight: () => (
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="shoppingcart"
                  size={24}
                  color="black"
                />
              ),
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="RestaurantsDelivery"
            component={RestaurantsDelivery}
          />
          <Stack.Screen name="Restaurant View" component={RestaurantView} />
          <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
