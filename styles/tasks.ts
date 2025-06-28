import { Colors } from "@/constants/colors";
import { StyleSheet } from "react-native";
 
const tasksStyles = StyleSheet.create({
    taskCard: {
        backgroundColor: Colors.base,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        height: 100,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 4,
    },
    taskDescription: {
        fontSize: 14,
        color: Colors.secondary,
        marginBottom: 8,
        flex: 1,
    },
    taskContent: {
        flex: 1,
        marginRight: 16,
        justifyContent: 'center',
    },
    tasksSection: {
        paddingHorizontal: 20,
    },
    taskActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    noTasksContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        minHeight: 400,
    },
    noTasksText: {
        fontSize: 20,
        color: Colors.secondary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    deleteTaskContainer: {
        backgroundColor: Colors.error,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        paddingLeft: 32,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderWidth: 1,
        borderColor: Colors.error,
        width: 100
    },
});

export default tasksStyles;