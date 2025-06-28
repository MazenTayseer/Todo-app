import TasksList from "@/components/TasksList";
import { Colors } from "@/constants/colors";
import { TaskStatus } from "@/enums/task-status";
import { useTasks } from "@/hooks/useTasks";
import globalStyles from "@/styles/global";
import tasksStyles from "@/styles/tasks";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function Tasks() {
    // fetching status from URL params
    const { status } = useLocalSearchParams();
    // fetching tasks and related functions from useTasks hook
    const { getTasksByStatus } = useTasks();
    // fetching tasks by status
    const tasks = getTasksByStatus(status as TaskStatus);
    return (
        <SafeAreaView style={globalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.base} />

            <View style={globalStyles.headerWithBackButton}>
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
                    <Text style={globalStyles.greeting}>
                        {status} Tasks
                        {status === TaskStatus.COMPLETED && ' ✅'}
                        {status === TaskStatus.IN_PROGRESS && ' ⏳'}
                    </Text>
                    <Text style={globalStyles.subtitle}>
                        {tasks.length} {status} tasks
                    </Text>
                </View>
            </View>

            <ScrollView style={tasksStyles.tasksSection}>
                <TasksList tasks={tasks} />
            </ScrollView>
        </SafeAreaView>
    );
}