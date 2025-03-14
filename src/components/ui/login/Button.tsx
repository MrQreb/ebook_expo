import globalStyles from "@/src/styles/globalStyles";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface ButtonLoginProps {
    text: string;
    onPress: () => void;
}

const ButtonLogin = ({ text, onPress }: ButtonLoginProps) => {
    return (
        <View style={styles.rowButton}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    rowButton: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: globalStyles.colors.backgroundButton,
        borderColor: 'black',
        borderWidth: 1.5,
    },
    buttonText: {
        fontSize: globalStyles.fontSizes.medium,
        fontFamily: globalStyles.fonts.interSemiBold,
        color: globalStyles.colors.subTitle,
    },
});

export default ButtonLogin;