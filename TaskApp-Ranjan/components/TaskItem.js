import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function TaskItem(props) {
  return (
    <View style={styles.taskItemStyleView}>
      <Text style={styles.taskItemStyleText}>
        {props.index}: {props.item.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItemStyleView: {
    margin: 5,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "white",
    // alignItems: "center",
  },
  taskItemStyleText: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "yellow",
    // alignItems: "center",
  },
});
