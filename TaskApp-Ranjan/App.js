import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addNewTask(newTask) {
    console.log("hello1");
    setTaskList((currentTaskList) => {
      return [
        ...currentTaskList,
        { text: newTask, id: Math.random().toString() },
      ];
    });
  }

  function deleteTask() {
    console.log("delete called test test");
  }
  return (
    <View style={styles.mainContainer}>
      <AddTask addNewTask={addNewTask} />
      <View style={styles.taskListSection}>
        <Text style={styles.taskOverviewTitle}>Your tasks:</Text>
        {taskList.length > 0 ? (
          <Text></Text>
        ) : (
          <Text style={styles.taskListIsEmpty}>Your task list is empty.</Text>
        )}

        <FlatList
          data={taskList}
          renderItem={({ item, index }) => {
            return (
              <TaskItem
                item={item}
                index={index}
                key={item.id}
                onDeleteTask={deleteTask}
              />
            );
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
  taskListIsEmpty: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  taskListSection: {
    flex: 5,
    backgroundColor: "green",
  },
});
