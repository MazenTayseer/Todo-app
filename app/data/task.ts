import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from "../enums/task-status";

export interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    status: TaskStatus;
}

export const sampleTasks: Task[] = [
    {
        id: uuidv4(),
        title: 'Task 1',
        description: 'Task 1 description',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: TaskStatus.IN_PROGRESS,
    },
    {
        id: uuidv4(),
        title: 'Task 2',
        description: 'Task 2 description',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: TaskStatus.IN_PROGRESS,
    },
    {
        id: uuidv4(),
        title: 'Task 3',
        description: 'Task 3 description',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: TaskStatus.IN_PROGRESS,
    },
]
