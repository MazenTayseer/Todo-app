import { Colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.base,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: 12,
        backgroundColor: Colors.base,
    },
    headerWithBackButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: Colors.base,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.secondary,
    },  
    statusCardsContainer: {
        paddingHorizontal: 20,
        marginBottom: 32,
    },
    statusCardsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    statusCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
        padding: 20,
        borderRadius: 16,
        minHeight: 80,
    },
    statusIcon: {
        padding: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 999,
    },
    statusTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    statusCount: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    tasksSection: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 16,
    },
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
    },
    taskActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    customButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 12,
    },
    customButtonText: {
        color: Colors.base,
        fontWeight: 'bold',
        fontSize: 14,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    formSection: {
        paddingHorizontal: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.primary,
        marginBottom: 8,
    },
    textInput: {
        backgroundColor: Colors.base,
        borderWidth: 1,
        borderColor: Colors.primaryMuted,
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },
    textInputFocused: {
        borderColor: Colors.primary,
        shadowOpacity: 0.2,
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    bottomButtonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingBottom: 30,
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
    deleteActionContainer: {
        backgroundColor: Colors.error,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        paddingLeft: 32,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 82,
        borderWidth: 1,
        borderColor: Colors.error,
        width: 100
    },
    completeActionContainer: {
        backgroundColor: Colors.success,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        paddingRight: 32,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 82,
        borderWidth: 1,
        borderColor: Colors.success,
        width: 100
    },
});

export default styles;