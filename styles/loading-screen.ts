import { Colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const loadingScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.base,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      alignItems: 'center',
      gap: 8,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: Colors.primary,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: Colors.secondary,
      textAlign: 'center',
    },
}); 