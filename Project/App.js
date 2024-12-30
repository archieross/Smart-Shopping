import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react"; //Helps store variables

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

import ShoppingList from "./Tabs/ShoppingList/ShoppingListTab";
import Recipes from "./Tabs/RecipeTab/MainFuncs/Recipes";
import Stats from "./Tabs/StatisticTab/Stats";
import Settings from "./Tabs/SettingsTab/Settings";
import Pantry from "./Tabs/PantryTab/Pantry";

import { AntDesign, Octicons } from "@expo/vector-icons";

export default function App() {
  const selectColour = "blue";

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Shopping List"
          component={ShoppingList}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require("./assets/shopping.png")} // Update with your image path
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? selectColour : color, // Optional: change color when focused
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Recipe"
          component={Recipes}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require("./assets/recipe.png")} // Update with your image path
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? selectColour : color, // Optional: change color when focused
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pantry"
          component={Pantry}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require("./assets/pantry.png")} // Update with your image path
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? selectColour : color, // Optional: change color when focused
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign
                name="linechart" // Use the appropriate icon name from Entypo
                size={size}
                color={focused ? selectColour : color} // Change color when focused
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Octicons
                name="gear" // Use the appropriate icon name from Entypo
                size={size}
                color={focused ? selectColour : color} // Change color when focused
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//<Tab.Screen name="Recipes" component={Recipes} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
