import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Button, Text } from "react-native";
import BlockRGB from "./BlockRGB";
import { Foundation } from '@expo/vector-icons';

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

  function clearScreen() {
    setColorArray([]);
  }
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={{ height: 40, justifyContent: "center"}}
      onPress={clearScreen}>
        <Foundation name="page-delete" size={24} color="black" />
      </TouchableOpacity>
      <FlatList 
       style={styles.list} 
       data={colorArray} 
       renderItem={renderItem}
       numColumns={6} />
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
      aspectRatio: 1,
      flex: 1,
      paddingLeft: 130,
      paddingRight: 10,
   },
   
   });