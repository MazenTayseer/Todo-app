import { StyleSheet } from "react-native";

const statusStyles = StyleSheet.create({
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
});

export default statusStyles;