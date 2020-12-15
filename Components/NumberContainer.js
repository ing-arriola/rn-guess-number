import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}> {props.children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.alert,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
    width: 80,
  },
  number: {
    fontSize: 22,
    color: "#000",
  },
});

export default NumberContainer;
