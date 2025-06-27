import CustomButton from '@/components/CustomButton';
import { Colors } from '@/constants/colors';
import { useTasks } from '@/hooks/useTasks';
import styles from "@/styles/global";
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

export default function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createTask } = useTasks();

    const handleAddTask = () => {
        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        if (!trimmedTitle) {
            Alert.alert('Validation Error', 'Please enter a task title');
            return;
        }

        if (!trimmedDescription) {
            Alert.alert('Validation Error', 'Please enter a task description');
            return;
        }

        createTask(trimmedTitle, trimmedDescription);
        
        router.back();
        Toast.show({
            text1: 'Task Added ✅',
            type: 'success',
            position: 'bottom',
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.base} />
            
            {/* Header */}
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
                    <Text style={styles.greeting}>Create New Task ✨</Text>
                    <Text style={styles.subtitle}>Add a new task to your list.</Text>
                </View>
            </View>

            {/* Form Content */}
            <ScrollView 
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Form Section */}
                <View style={styles.formSection}>                    
                    {/* Title Input */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Title *</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter task title..."
                            placeholderTextColor={Colors.primaryMuted}
                            value={title}
                            onChangeText={setTitle}
                            maxLength={100}
                            returnKeyType="next"
                        />
                    </View>

                    {/* Description Input */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Description *</Text>
                        <TextInput
                            style={[styles.textInput, styles.textArea]}
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

            {/* Fixed Bottom Button */}
            <View style={styles.bottomButtonContainer}>
                <CustomButton
                    title="Create Task"
                    onPress={handleAddTask}
                    icon="plus"
                />
            </View>
        </SafeAreaView>
    );
} 