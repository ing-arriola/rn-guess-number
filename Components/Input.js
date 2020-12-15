import React from "react";
import { TextInput, StyleSheet } from "react-native";
const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.specificStyles }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    borderBottomWidth: 1,
    height: 35,
    marginVertical: 10,
  },
});

export default Input;
