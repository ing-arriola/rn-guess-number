import React from "react";
import { StyleSheet, View } from "react-native";
const Card = ({ children, specificStyles }) => {
  return (
    <View style={{ ...styles.inputContainer, ...specificStyles }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 8,

    elevation: 5, //This just works on Android
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    shadowColor: "#000", //shadow just works on iOS
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default Card;
