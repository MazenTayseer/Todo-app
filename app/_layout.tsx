import LoadingScreen from '@/components/LoadingScreen';
import { TasksProvider } from '@/hooks/useTasks';
import { Stack } from "expo-router";
import React, { useState } from "react";
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <TasksProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="add-task" 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="tasks"
          
          options={{
            headerShown: false,
          }} 
        />
      </Stack>
      <Toast />
    </TasksProvider>
  );
}
