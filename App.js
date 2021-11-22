import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import ComlpetedTask from "./components/ComlpetedTask";

export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const [completedTaskItems, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    let completedItem = itemCopy.splice(index, 1);
    completedTaskItems.push(completedItem);
    setTaskItems(itemCopy);
  };

  const incompleteTask = (index) => {
    let itemCopy = [...completedTaskItems];
    let incompleteItem = itemCopy.splice(index, 1);
    taskItems.push(incompleteItem);
    setCompletedTasks(itemCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>All tasks</Text>
      </View>

      <ScrollView style={styles.items}>
        {/* This is where the tasks items goes */}
        {taskItems
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <Task
                key={index}
                onpress={() => completeTask(index)}
                text={item}
              />
            );
          })}

        {/* Completed tasks */}
        <Text style={styles.comlpetedTaskTitle}>Completed tasks</Text>
        {completedTaskItems
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <View key={index}>
                <Task onpress={() => incompleteTask(index)} text={item} />
              </View>
            );
          })}

        <View style={{ paddingBottom: 150 }}></View>
      </ScrollView>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addTaskWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  sectionWrapper: {
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: "#1E90FF",
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
  },
  items: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 150,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  input: {
    height: 55,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 18,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00000008",
    shadowColor: "#00000080",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 20,
    fontWeight: "bold",
  },
  addTaskWrapper: {
    backgroundColor: "dodgerblue",
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00000008",
    shadowColor: "#00000080",
    elevation: 1,
  },
  addText: { fontSize: 20, color: "white" },
  comlpetedTaskTitle: {
    fontWeight: "bold",
    opacity: 0.5,
    marginVertical: 10,
  },
});
