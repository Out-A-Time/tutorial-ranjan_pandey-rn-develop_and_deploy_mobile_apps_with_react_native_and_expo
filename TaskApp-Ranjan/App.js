import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter task details" style={styles.inputBox} />
        <Button title="Add Task" style={styles.addTaskButton}></Button>
      </View>
      <View style={styles.taskList}>
        <Text>Your added Task</Text>
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
  },
  addTaskButton: {},
  taskList: {
    flex: 5,
    backgroundColor: "green",
  },
});
