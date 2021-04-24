import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Button } from "react-native";
import BlockRGB from "./BlockRGB";

export default function HomeScreen({ navigation }) {
 
    const [colorArray, setColorArray] = useState([]);
  
    useEffect (() => {
      navigation.setOptions({
        headerRight: () => <Button onPress={addColor}
        title="Add color" />
      })
    })
   
   function renderItem({ item }) {
     return (
       <TouchableOpacity
         onPress={() => navigation.navigate("DetailsScreen", { ...item })}
       >
         <BlockRGB red={item.red} green={item.green} blue={item.blue} />
       </TouchableOpacity>
     );
   }
  
   function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`,
      },
    ]);
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
       style={styles.list} 
       data={colorArray} 
       renderItem={renderItem}
       numColumns={8} />
     </View>
   );
  }

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    list: {
      height: 500,
      width: 500,
   },
   
   });