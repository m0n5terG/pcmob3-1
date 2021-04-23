import React from "react";
import { StyleSheet, Text, View, Button, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Colour List" component={HomeScreen}
       options={{
         headerRight: () => (
          <Button
          onPress={() => alert('This is a button!')}
          title="Add Colour"
          color="#00cc00"
        />
         ),
       }} 
       />
       <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "center",
 },
 
 detailText: {
   fontSize: 24,
   marginBottom: 20,
 },
});


