import CustomButton from '@/components/CustomButton';
import StatusCard from '@/components/StatusCard';
import TasksList from '@/components/TasksList';
import { Colors } from '@/constants/colors';
import { UserData } from '@/data/user-data';
import { TaskStatus } from '@/enums/task-status';
import { useTasks } from '@/hooks/useTasks';
import globalStyles from "@/styles/global";
import statusStyles from '@/styles/status-cards';
import tasksStyles from '@/styles/tasks';
import { router } from 'expo-router';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from "react-native";

/**
 * Main dashboard screen - shows task overview and recent tasks
 * Central hub for navigating to other parts of the app
 */
export default function Index() {
    // Dummy user data
    const userData: UserData = {
        name: 'Mazen',
    };
    
    // fetching tasks and related functions from useTasks hook
    const { 
        getTasksByStatus,
        getSortedTasks,
    } = useTasks();
    
    return (
        <SafeAreaView style={globalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.base} />
            
            {/* Top header with greeting and add button */}
            <View style={globalStyles.header}>
                <View>
                    <Text style={globalStyles.greeting}>Hi, {userData.name} 👋</Text>
                    <Text style={globalStyles.subtitle}>Let&apos;s get things done today.</Text>
                </View>
                <View>
                    <CustomButton 
                        title="Add Task"
                        onPress={() => router.push('./add-task')}
                        icon="plus"
                    />
                </View>
            </View>

            <ScrollView 
                style={{ flex: 1 }}
                contentContainerStyle={globalStyles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Status overview cards - tap to filter tasks by status */}
                <View style={statusStyles.statusCardsContainer}>
                    <View style={statusStyles.statusCardsRow}>
                        <StatusCard
                            status={TaskStatus.IN_PROGRESS}
                            count={getTasksByStatus(TaskStatus.IN_PROGRESS).length}
                            backgroundColor={Colors.info}
                            iconName="clock"
                        />
                        <StatusCard
                            status={TaskStatus.COMPLETED}
                            count={getTasksByStatus(TaskStatus.COMPLETED).length}
                            backgroundColor={Colors.success}
                            iconName="check-circle"
                        />
                    </View>
                </View>

                {/* List of all tasks sorted by last update */}
                <View style={tasksStyles.tasksSection}>
                    <Text style={globalStyles.sectionTitle}>Recent Tasks</Text>
                    <TasksList tasks={getSortedTasks()} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
