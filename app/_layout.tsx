import LoadingScreen from '@/components/LoadingScreen';
import { TasksProvider } from '@/hooks/useTasks';
import { Stack } from "expo-router";
import React, { useState } from "react";
import Toast from 'react-native-toast-message';

/**
 * Root layout component - sets up the entire app structure
 * Handles loading state, navigation, and global providers
 */
export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Show loading screen during app initialization
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    // Wrap everything in TasksProvider to enable task management throughout the app (same tasks in all screens)
    <TasksProvider>
      <Stack>
        {/* Main dashboard */}
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false,
          }} 
        />
        {/* Task creation screen */}
        <Stack.Screen 
          name="add-task" 
          options={{
            headerShown: false,
          }} 
        />
        {/* Filtered tasks view */}
        <Stack.Screen 
          name="tasks"
          options={{
            headerShown: false,
          }} 
        />
      </Stack>
      {/* Global toast notifications */}
      <Toast />
    </TasksProvider>
  );
}
