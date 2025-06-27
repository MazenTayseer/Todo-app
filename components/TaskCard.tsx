import { Colors } from "@/constants/colors";
import { Task } from "@/data/task";
import { TaskStatus } from "@/enums/task-status";
import { useTasks } from "@/hooks/useTasks";
import styles from "@/styles/styles";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Toast from "react-native-toast-message";

type TaskCardProps = {
  task: Task;
}

export default function TaskCard({
  task,
}: TaskCardProps) {
  const isCompleted = task.status === TaskStatus.COMPLETED;
  const { toggleTaskStatus, deleteTask } = useTasks();

  const handleDeleteTask = () => {
    deleteTask(task.id);
    Toast.show({
      text1: 'Task Deleted ✅',
      type: 'success',
      position: 'bottom',
    });
  }

  const renderRightActions = (prog: SharedValue<number>, drag: SharedValue<number>) => {
    const styleAnimation = useAnimatedStyle(() => {  
      return {
        transform: [{ translateX: drag.value + 60 }],
      };
    });
  
    return (
      <Reanimated.View style={styleAnimation}>
        <TouchableOpacity 
          style={styles.deleteActionContainer}
          onPress={handleDeleteTask}
          activeOpacity={0.7}
        >
          <Feather name="trash-2" size={24} color={Colors.base} />
        </TouchableOpacity>
      </Reanimated.View>
    );
  }

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        renderRightActions={renderRightActions}
        overshootLeft={false}
        overshootRight={false}
      >
        <View style={styles.taskCard}>
        <View>
          <Text
            style={[
              styles.taskTitle,
              isCompleted && { textDecorationLine: "line-through", color: Colors.primaryMuted },
            ]}
          >
            {task.title}
          </Text>
          <Text
            style={[
              styles.taskDescription,
              isCompleted && { color: Colors.secondaryMuted },
            ]}
          >
            {task.description}
          </Text>
        </View>
        <View style={styles.taskActions}>
          <TouchableOpacity onPress={() => {
            const newStatus = isCompleted ? TaskStatus.IN_PROGRESS : TaskStatus.COMPLETED;
            toggleTaskStatus(task.id, newStatus);
          }}>
            <Feather
              name={isCompleted ? "check-circle" : "circle"}
              size={24}
              color={isCompleted ? Colors.success : Colors.primaryMuted}
            />
          </TouchableOpacity>
          </View>
        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
}
