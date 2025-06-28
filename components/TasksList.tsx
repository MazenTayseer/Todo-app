import { Colors } from "@/constants/colors";
import { Task } from "@/data/task";
import React from "react";
import tasksStyles from "@/styles/tasks";
import globalStyles from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import TaskCard from "./TaskCard";

type TasksProps = {
  tasks: Task[];
};

export default function TasksList({ tasks }: TasksProps) {
  // tasks list component that shows all tasks
  return (
    <View>
      { tasks.length > 0 ? (
        <>
          <Text style={[globalStyles.subtitle, { marginBottom: 8 }]}>
            (Swipe left to delete a task)
          </Text>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </>
      ) : (
        <View style={tasksStyles.noTasksContainer}>
          <Feather name="alert-circle" size={40} color={Colors.secondary} />
          <Text style={tasksStyles.noTasksText}>
            No tasks found
          </Text>
        </View>
      )}
    </View>
  );
}
