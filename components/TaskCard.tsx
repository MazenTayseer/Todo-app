import { Colors } from "@/constants/colors";
import { Task } from "@/data/task";
import { TaskStatus } from "@/enums/task-status";
import { useTasks } from "@/hooks/useTasks";
import tasksStyles from "@/styles/tasks";
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
  // checking if task is completed
  const isCompleted = task.status === TaskStatus.COMPLETED;
  // fetching toggleTaskStatus and deleteTask from useTasks hook
  const { toggleTaskStatus, deleteTask } = useTasks();

  // handling delete task
  const handleDeleteTask = () => {
    deleteTask(task.id);
    Toast.show({
      text1: 'Task Deleted ✅',
      type: 'success',
      position: 'bottom',
    });
  }

  // handling delete task while swiping right on the card
  // Code follows documentation
  const renderRightActions = (prog: SharedValue<number>, drag: SharedValue<number>) => {
    const styleAnimation = useAnimatedStyle(() => {  
      return {
        transform: [{ translateX: drag.value + 60 }],
      };
    });
  
    return (
      <Reanimated.View style={styleAnimation}>
        <TouchableOpacity 
          style={tasksStyles.deleteTaskContainer}
          onPress={handleDeleteTask}
          activeOpacity={0.7}
        >
          <Feather name="trash-2" size={24} color={Colors.base} />
        </TouchableOpacity>
      </Reanimated.View>
    );
  }

  // task card component (Swipeable for best UX, for deletion of task)
  // Code follows documentation
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        renderRightActions={renderRightActions}
        overshootLeft={false}
        overshootRight={false}
      >
        <View style={tasksStyles.taskCard}>
        <View>
          <Text
            style={[
              tasksStyles.taskTitle,
              isCompleted && { textDecorationLine: "line-through", color: Colors.primaryMuted },
            ]}
          >
            {task.title}
          </Text>
          <Text
            style={[
              tasksStyles.taskDescription,
              isCompleted && { color: Colors.secondaryMuted },
            ]}
          >
            {task.description}
          </Text>
        </View>
        <View style={tasksStyles.taskActions}>
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
