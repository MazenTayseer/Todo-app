import { SafeAreaView,
    StatusBar,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from "react-native";
import styles from "./styles/styles";
import { Colors } from "./constants/colors";
import TasksList from "./components/TasksList";
import { Feather } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import { TaskStatus } from "./enums/task-status";
import { useTasks } from "./hooks/useTasks";

export default function Tasks() {
    const { status } = useLocalSearchParams();
    const { getTasksByStatus } = useTasks();
    const tasks = getTasksByStatus(status as TaskStatus);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.base} />

            <View style={styles.headerWithBackButton}>
                <View>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Feather
                            name="chevron-left"
                            size={24}
                            color={Colors.primary}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.greeting}>
                        {status} Tasks
                        {status === TaskStatus.COMPLETED && ' ✅'}
                        {status === TaskStatus.IN_PROGRESS && ' ⏳'}
                    </Text>
                    <Text style={styles.subtitle}>
                        {tasks.length} {status} tasks
                    </Text>
                </View>
            </View>

            <ScrollView style={styles.tasksSection}>
                <TasksList tasks={tasks} />
            </ScrollView>
        </SafeAreaView>
    );
}