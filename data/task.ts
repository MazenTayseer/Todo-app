import { TaskStatus } from "@/enums/task-status";
import 'react-native-get-random-values';

export interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    status: TaskStatus;
}
