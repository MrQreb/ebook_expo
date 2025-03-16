import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import globalStyles from "../../../styles/globalStyles";
import { Eye, EyeOff } from "lucide-react-native";
import { useState, useCallback, useMemo } from "react";

interface PasswordInputProps {
    value: string;
    onChangeText: (text: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText }) => {
    const [isVisible, setIsVisible] = useState<Boolean>(false);

    const handleChangeVisibility = useCallback(() => {
        setIsVisible(prevState => !prevState);
        console.log(isVisible);
    }, [isVisible]);

    const eyeIcon = useMemo(() => isVisible ? <EyeOff color="white" size={30} /> : <Eye color="white" size={30} />, [isVisible]);

    return (
        <View style={styles.rowInputs}>
            <Text style={styles.inputText}>Contraseña</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe aquí..."
                    secureTextEntry={!isVisible}
                    value={value}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity onPress={handleChangeVisibility} style={styles.iconContainer}>
                    {eyeIcon}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowInputs: {
        flex: 1,
        marginVertical: 12,
        marginHorizontal: 30
    },
    inputText: {
        marginBottom: 5,
        color: globalStyles.colors.subTitle,
        fontFamily: globalStyles.fonts.jetBrainsMonoSemiBold,
        fontSize: globalStyles.fontSizes.medium,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: '100%',
    },
    iconContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 20,
    },
});

export default PasswordInput;