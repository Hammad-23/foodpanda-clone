import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../screens/home";
import React from "react";
import RestaurantMenu from '../../screens/restaurantMenu'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BBQ" component={RestaurantMenu} />
      <Tab.Screen name="Drinks" component={RestaurantMenu} />
      <Tab.Screen name="Burgers" component={RestaurantMenu} />
      <Tab.Screen name="Pizzas" component={RestaurantMenu} />
    </Tab.Navigator>
  );
}

export default MyTabs;
