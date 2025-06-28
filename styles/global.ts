import { Colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
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
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 16,
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
});

export default globalStyles;