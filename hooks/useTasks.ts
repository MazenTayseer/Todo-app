import { sampleTasks, Task } from "@/data/task";
import { TaskStatus } from "@/enums/task-status";
import React, { createContext, ReactNode, useContext, useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

/**
 * Task management context interface
 * Provides all the functionality needed to work with tasks throughout the app
 */
interface TasksContextType {
    tasks: Task[];
    getTasksByStatus: (status: TaskStatus) => Task[];
    createTask: (title: string, description: string) => void;
    toggleTaskStatus: (taskId: string, status: TaskStatus) => void;
    deleteTask: (taskId: string) => void;
    getSortedTasks: () => Task[];
}

// Create context
const TasksContext = createContext<TasksContextType | undefined>(undefined);

interface TasksProviderProps {
    children: ReactNode;
}

/**
 * Main task management provider
 * Wraps the app to provide task state and operations to all components
 */
export const TasksProvider = ({ children }: TasksProviderProps) => {
    // In-memory storage as required
    const [tasks, setTasks] = useState<Task[]>(sampleTasks);

    // Filter tasks by their current status
    const getTasksByStatus = (status: TaskStatus) => {
        return tasks.filter(task => task.status === status);
    };

    // Create a new task - always starts as "In Progress"
    const createTask = (title: string, description: string) => {
        const now = new Date();
        const newTask: Task = {
            id: uuidv4(),
            title,
            description,
            createdAt: now,
            updatedAt: now,
            status: TaskStatus.IN_PROGRESS,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    // Toggle task between completed and in-progress states
    const toggleTaskStatus = (taskId: string, status: TaskStatus) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId 
                    ? { ...task, status, updatedAt: new Date() } 
                    : task
            )
        );
    };

    // Remove task completely from the list
    const deleteTask = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    // Sort tasks by when they were last updated (oldest first)
    const getSortedTasks = () => {
        return tasks.sort((a, b) => {
          const aInProgress = a.status === TaskStatus.IN_PROGRESS;
          const bInProgress = b.status === TaskStatus.IN_PROGRESS;
      
          if (aInProgress && !bInProgress) return -1; // a comes first
          if (!aInProgress && bInProgress) return 1;  // b comes first
      
          // If both are the same status group, sort by createdAt
          return b.createdAt.getTime() - a.createdAt.getTime();
        });
    };

    const value: TasksContextType = {
        tasks,
        getTasksByStatus,
        createTask,
        toggleTaskStatus,
        deleteTask,
        getSortedTasks,
    };

    return React.createElement(TasksContext.Provider, { value }, children);
};

/**
 * Hook to access task management functionality
 * Throws error if used outside of TasksProvider (helps catch setup mistakes)
 */
export const useTasks = (): TasksContextType => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks must be used within a TasksProvider');
    }
    return context;
};
