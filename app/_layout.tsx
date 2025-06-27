import { Stack } from "expo-router";
import React from "react";
import Toast from 'react-native-toast-message';
import { TasksProvider } from './hooks/useTasks';

export default function RootLayout() {
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
