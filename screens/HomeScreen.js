import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import BlockRGB from './components/BlockRGB'
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
 
  const [colorArray, setColorArray] = useState([]);
 
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
     <TouchableOpacity
       style={{ height: 40, justifyContent: "center" }}
       onPress={addColor}
     >
       <Text style={{ color: "red" }}>Add colour</Text>
     </TouchableOpacity>
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
   