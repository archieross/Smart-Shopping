import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function IconButton({ title, onPress, icon, colour }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} color={colour ? colour : "black"} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    //height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontWeight: "bold", fontSize: 16, color: "black", marginLeft: 10 },
});
