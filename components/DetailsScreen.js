import React, {  } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function DetailsScreen({ route }) {
 
    const { red, green, blue } = route.params;
   
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
        ]}
      >
        <View style={{ padding: 30 }}>
          <Text style={styles.detailText}>Red: {red}</Text>
          <Text style={styles.detailText}>Green: {green}</Text>
          <Text style={styles.detailText}>Blue: {blue}</Text>
        </View>
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
   
    detailText: {
      fontSize: 24,
      marginBottom: 20,
   },
   });