import { Colors } from "@/constants/colors";
import globalStyles from "@/styles/global";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
    title?: string;
    onPress: () => void;
    icon?: keyof typeof Feather.glyphMap;
}

export default function CustomButton(
    { title, onPress, icon }: CustomButtonProps
) {
    // Custom button component with optional title and icon for all app
    return (
        <TouchableOpacity style={globalStyles.customButton} onPress={onPress}>
            {icon && <Feather name={icon} size={20} color={Colors.base} />}
            {title && <Text style={globalStyles.customButtonText}>{title}</Text>}
        </TouchableOpacity>
    );
}