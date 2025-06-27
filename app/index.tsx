import { router } from 'expo-router';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from "react-native";
import CustomButton from './components/CustomButton';
import StatusCard from './components/StatusCard';
import TasksList from './components/TasksList';
import { Colors } from './constants/colors';
import { UserData } from './data/user-data';
import { TaskStatus } from './enums/task-status';
import { useTasks } from './hooks/useTasks';
import styles from "./styles/styles";


export default function Index() {
    const userData: UserData = {
        name: 'Mazen',
    };
    const { 
        tasks,
        getTasksByStatus,
        getSortedTasks,
    } = useTasks();
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.base} />
            
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hi, {userData.name} 👋</Text>
                    <Text style={styles.subtitle}>Let's get things done today.</Text>
                    {/* Custom hook for task management */}
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
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Status Cards */}
                <View style={styles.statusCardsContainer}>
                    <View style={styles.statusCardsRow}>
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

                {/* Recent Tasks Section */}
                <View style={styles.tasksSection}>
                    <Text style={styles.sectionTitle}>Recent Tasks</Text>
                    <TasksList tasks={getSortedTasks()} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
