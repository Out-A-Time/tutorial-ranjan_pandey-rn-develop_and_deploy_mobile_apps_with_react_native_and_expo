import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(["drink milk", "wash car"]);

  function taskInputHandler(inputTask) {
    setTask(inputTask);
  }

  function addNewTask() {
    console.log("hello1");
    setTaskList((currentTaskList) => {
      return [...currentTaskList, task];
    });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={taskInputHandler}
          placeholder="Enter task details"
          style={styles.inputBox}
        />
        <Button
          onPress={addNewTask}
          title="Add Task"
          style={styles.addTaskButton}
        ></Button>
      </View>
      <View style={styles.taskListSection}>
        <Text style={styles.taskOverviewTitle}>Your tasks:</Text>
        {taskList.map((singleTask, index) => {
          return (
            <View style={styles.taskItemStyleView}>
              <Text key={index} style={styles.taskItemStyleText}>
                {index} {singleTask}
              </Text>
            </View>
          );
        })}
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 45,
    paddingTop: 50,
    paddingHorizontal: 30,
    backgroundColor: "grey",
  },
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
  taskListSection: {
    flex: 5,
    backgroundColor: "green",
  },
  taskOverviewTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
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
