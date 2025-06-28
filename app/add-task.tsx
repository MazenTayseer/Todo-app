import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/colors';
import { useTasks } from '@/hooks/useTasks';
import globalStyles from "@/styles/global";
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Toast from 'react-native-toast-message';

/**
 * Task creation screen - form for adding new tasks
 * Validates input and provides feedback to the user
 */
export default function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createTask } = useTasks();

    // Create new task with validation
    const handleAddTask = () => {
        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        // Basic validation - both fields are required
        if (!trimmedTitle) {
            Alert.alert('Validation Error', 'Please enter a task title');
            return;
        }

        if (!trimmedDescription) {
            Alert.alert('Validation Error', 'Please enter a task description');
            return;
        }

        // Create the task and navigate back with success feedback
        createTask(trimmedTitle, trimmedDescription);
        
        router.back();
        Toast.show({
            text1: 'Task Added ✅',
            type: 'success',
            position: 'bottom',
        });
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.base} />
            
            {/* Header with back button */}
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
                    <Text style={globalStyles.greeting}>Create New Task ✨</Text>
                    <Text style={globalStyles.subtitle}>Add a new task to your list.</Text>
                </View>
            </View>

            {/* Scrollable form content */}
            <ScrollView 
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={globalStyles.formSection}>                    
                    {/* Task title input */}
                    <View style={globalStyles.inputContainer}>
                        <Text style={globalStyles.inputLabel}>Title *</Text>
                        <TextInput
                            style={globalStyles.textInput}
                            placeholder="Enter task title..."
                            placeholderTextColor={Colors.primaryMuted}
                            value={title}
                            onChangeText={setTitle}
                            maxLength={100}
                            returnKeyType="next"
                        />
                    </View>

                    {/* Task description input */}
                    <View style={globalStyles.inputContainer}>
                        <Text style={globalStyles.inputLabel}>Description *</Text>
                        <TextInput
                            style={[globalStyles.textInput, globalStyles.textArea]}
                            placeholder="Enter task description..."
                            placeholderTextColor={Colors.primaryMuted}
                            value={description}
                            onChangeText={setDescription}
                            maxLength={500}
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Fixed bottom button */}
            <View style={globalStyles.bottomButtonContainer}>
                <CustomButton
                    title="Create Task"
                    onPress={handleAddTask}
                    icon="plus"
                />
            </View>
        </SafeAreaView>
    );
} 