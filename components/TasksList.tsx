import { Colors } from "@/constants/colors";
import { Task } from "@/data/task";
import styles from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import TaskCard from "./TaskCard";

type TasksProps = {
  tasks: Task[];
};

export default function TasksList({ tasks }: TasksProps) {
  return (
    <View>
      { tasks.length > 0 ? tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      )) : (
        <View style={styles.noTasksContainer}>
          <Feather name="alert-circle" size={40} color={Colors.secondary} />
          <Text style={styles.noTasksText}>
            No tasks found
          </Text>
        </View>
      )}
    </View>
  );
}
