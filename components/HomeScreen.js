import React from "react";
import { View, Text } from "react-native";
import BlockRGB from "./"

function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
   }


return (
    <View style={styles.container}>
      <BlockRGB red={255} green={0} blue={0} />
      <BlockRGB red={0} green={255} blue={0} />
      <BlockRGB red={0} green={0} blue={255} />
    </View>
  );
 
 