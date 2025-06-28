import { TaskStatus } from "@/enums/task-status";
import 'react-native-get-random-values';

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
