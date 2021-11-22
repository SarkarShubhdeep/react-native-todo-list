import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Task from "./Task";

const ComlpetedTask = (prop) => {
  return (
    <View>
      <Text style={styles.comlpetedTaskTitle}>Completed tasks</Text>
      <Task />
      <Task />
    </View>
  );
};

const styles = StyleSheet.create({
  comlpetedTaskTitle: {
    fontWeight: "bold",
    opacity: 0.5,
    marginVertical: 10,
  },
});

export default ComlpetedTask;
