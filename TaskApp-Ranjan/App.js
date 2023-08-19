import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

export default function App() {
  const [taskList, setTaskList] = useState(["drink milk", "wash car"]);

  function addNewTask(newTask) {
    console.log("hello1");
    setTaskList((currentTaskList) => {
      return [
        ...currentTaskList,
        { text: newTask, id: Math.random().toString() },
      ];
    });
  }

  return (
    <View style={styles.mainContainer}>
      <AddTask addNewTask={addNewTask} />
      <View style={styles.taskListSection}>
        <Text style={styles.taskOverviewTitle}>Your tasks:</Text>
        <FlatList
          data={taskList}
          renderItem={({ item, index }) => {
            return <TaskItem item={item} index={index} key={item.id} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
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

  taskOverviewTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  taskListSection: {
    flex: 5,
    backgroundColor: "green",
  },
});
