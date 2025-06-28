import { TaskStatus } from "@/enums/task-status";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

/**
 * Core task model - represents a single todo item
 * Contains all necessary fields for task lifecycle management
 */
export interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    status: TaskStatus;
}

// Sample tasks
export const sampleTasks: Task[] = [
    {
        id: uuidv4(),
        title: 'Design Landing Page',
        description: 'Create a responsive landing page mockup using Figma for the new product launch.',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: TaskStatus.IN_PROGRESS,
    },
    {
        id: uuidv4(),
        title: 'Call the Electrician',
        description: 'Schedule an appointment to fix the faulty kitchen light and check the circuit breaker.',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: TaskStatus.IN_PROGRESS,
    },
    {
        id: uuidv4(),
        title: 'Read 2 Chapters of Book',
        description: 'Read chapters 4 and 5 of Atomic Habits and take brief notes.',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: TaskStatus.IN_PROGRESS,
    },
]