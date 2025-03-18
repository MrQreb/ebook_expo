import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useState, useCallback, useMemo } from "react";
import globalStyles from "@/src/styles/globalStyles";

interface PasswordInputProps {
    value?: string;
    onChangeText: (text: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText }) => {
    const [isVisible, setIsVisible] = useState<Boolean>(false);

    const handleChangeVisibility = useCallback(() => {
        setIsVisible(prevState => !prevState);
    }, [isVisible]);

    const eyeIcon = useMemo(() => isVisible ? <EyeOff color="white" size={30} /> : <Eye color="white" size={30} />, [isVisible]);

    return (
        <View style={styles.rowInputs}>
            <Text style={styles.labelText}>Contraseña</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe aquí..."
                    secureTextEntry={!isVisible}
                    value={value}
                    placeholderTextColor={globalStyles.colors.subTitle}
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
    labelText: {
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
        color:'white',
        fontFamily:globalStyles.fonts.jetBrainsMonoSemiBold,        
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