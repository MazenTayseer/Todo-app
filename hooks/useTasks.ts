import React, { createContext, useContext, useState, ReactNode } from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "@/data/task";
import { TaskStatus } from "@/enums/task-status";

interface TasksContextType {
    tasks: Task[];
    getTasksByStatus: (status: TaskStatus) => Task[];
    createTask: (title: string, description: string) => void;
    toggleTaskStatus: (taskId: string, status: TaskStatus) => void;
    deleteTask: (taskId: string) => void;
    getSortedTasks: () => Task[];
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

interface TasksProviderProps {
    children: ReactNode;
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasksByStatus = (status: TaskStatus) => {
        return tasks.filter(task => task.status === status);
    };

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

    const toggleTaskStatus = (taskId: string, status: TaskStatus) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId 
                    ? { ...task, status, updatedAt: new Date() } 
                    : task
            )
        );
    };

    const deleteTask = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    const getSortedTasks = () => {
        return tasks.sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());
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

export const useTasks = (): TasksContextType => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks must be used within a TasksProvider');
    }
    return context;
};
