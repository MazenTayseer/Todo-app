import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/colors";
import styles from "@/styles/styles";

type CustomButtonProps = {
    title?: string;
    onPress: () => void;
    icon?: keyof typeof Feather.glyphMap;
}

export default function CustomButton(
    { title, onPress, icon }: CustomButtonProps
) {
    return (
        <TouchableOpacity style={styles.customButton} onPress={onPress}>
            {icon && <Feather name={icon} size={20} color={Colors.base} />}
            {title && <Text style={styles.customButtonText}>{title}</Text>}
        </TouchableOpacity>
    );
}