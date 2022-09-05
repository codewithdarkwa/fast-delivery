import React from "react";
import { View, Text } from "react-native";

export default function OrderItem({ item }) {
  const { title, price, name } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16,color:"#000" }}>{title}</Text>
      <Text style={{ opacity: 0.5, fontSize: 16,color:"#000" }}>{price}</Text>
    </View>
  );
}
