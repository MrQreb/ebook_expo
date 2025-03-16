import { View, StyleSheet, Text, TextInput, } from "react-native";
import globalStyles from "../../../styles/globalStyles";

interface InputProps {
    value?: string;
    onChangeText: (text: string) => void;
    textInput:string;
    textPlaceHolder:string
}

const Input: React.FC<InputProps> = ({ value, onChangeText, textInput ,textPlaceHolder }) => {

    return (
        <View style={styles.rowInputs}>
            <Text style={styles.inputText}>{textInput}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={textPlaceHolder}
                    value={value}
                    onChangeText={onChangeText}
                />
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
});

export default Input;