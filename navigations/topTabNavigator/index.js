import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../screens/home";
import React from "react";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="BBQ" component={Home} />
      <Tab.Screen name="Drinks" component={Home} />
      <Tab.Screen name="Burgers" component={Home} />
      <Tab.Screen name="Pizzas" component={Home} />
    </Tab.Navigator>
  );
}

export default MyTabs;
