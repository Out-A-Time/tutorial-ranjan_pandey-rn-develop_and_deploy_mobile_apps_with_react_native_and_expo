import { StyleSheet, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function AddTask(props) {
  const [task, setTask] = useState("");

  function taskInputHandler(inputTask) {
    setTask(inputTask);
  }

  function handleOnPress() {
    props.addNewTask(task);
    setTask("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={task}
        onChangeText={taskInputHandler}
        placeholder="Enter task details"
        style={styles.inputBox}
      />
      <Button
        onPress={handleOnPress}
        title="Add Task"
        style={styles.addTaskButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    paddingBottom: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "red",
    backgroundColor: "skyblue",
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    marginRight: 5,
    backgroundColor: "white",
  },
  addTaskButton: {},
});
