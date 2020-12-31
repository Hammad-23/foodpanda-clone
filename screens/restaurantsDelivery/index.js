import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Input from "../../components/input";

function RestaurantsDelivery() {
  return (
    <ScrollView>
        <View style={styles.inpRow}>
      <View>
        <Input />
      </View>
      <View>
          <TouchableOpacity style={styles.filter} >
      <AntDesign name="bars" size={28} color="black" />
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}

export default RestaurantsDelivery;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    filter: {
        backgroundColor:'grey',
        height:60,
        width:60,
        borderRadius:12,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    
    },
    inpRow: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20
    }
  });
