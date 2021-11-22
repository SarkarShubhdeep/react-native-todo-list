import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const Task = (props) => {
  const completed = false;

  return (
    <View style={styles.taskbg}>
      <View style={styles.leftItems}>
        <TouchableOpacity onPress={props.onpress}>
          <View style={styles.checkBox}></View>
        </TouchableOpacity>
        <Text style={styles.textItem}>{props.text}</Text>
      </View>

      <View style={styles.rightCircle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskbg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#00000003",
  },
  leftItems: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkBox: {
    marginRight: 15,
    backgroundColor: "dodgerblue",
    height: 24,
    width: 24,
    opacity: 0.4,
    borderRadius: 5,
  },
  rightCircle: {
    borderColor: "dodgerblue",
    borderWidth: 2,
    height: 14,
    width: 14,
    opacity: 0.4,
    borderRadius: 5,
  },
  textItem: {
    fontSize: 15,
    width: "80%",
  },
});

export default Task;
