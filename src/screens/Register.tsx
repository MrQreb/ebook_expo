import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import globalStyles from '@/src/styles/globalStyles';
import FooterLogin from "@/components/ui/login/Footer";
import ButtonLogin from '@/components/ui/login/Button';

const handleLogin = () => {
    console.log('login');
};

const Register = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.rowTitle}>
                    <Text style={styles.title}>Crear Cuenta</Text>
                    <Text style={styles.subTitle}>Nos alegra tenerte en ebook</Text>
                </View>

                <View style={styles.rowContainerInputs}>
                    <View style={styles.rowInputs}>
                        <Text style={styles.inputText}>Correo Electronico</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Escribe aquí..." 
                        />
                    </View>

                    <View style={styles.rowInputs}>
                        <Text style={styles.inputText}>Contraseña</Text>
                        <TextInput style={styles.input} placeholder="Escribe aquí..." secureTextEntry />
                    </View>

                    <View style={styles.rowInputs}>
                        <Text style={styles.inputText}>Confirmar Contraseña</Text>
                        <TextInput style={styles.input} placeholder="Escribe aquí..." secureTextEntry />
                    </View>
                </View>

                <ButtonLogin text="Crear" onPress={handleLogin}/>

                <FooterLogin text1="¿Tienes cuenta?" href="./login" text2="Incia Sesión" />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.background,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowTitle: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        paddingLeft: '10%',
        alignItems: 'baseline',
    },
    title: {
        textAlign: 'center',
        fontFamily: globalStyles.fonts.interBold,
        fontSize: globalStyles.fontSizes.extraLarge,
        color: globalStyles.colors.title,
    },
    subTitle: {
        marginTop: '5%',
        textAlign: 'center',
        fontFamily: globalStyles.fonts.jetBrainsMonoThin,
        fontSize: globalStyles.fontSizes.small,
        color: globalStyles.colors.subTitle,
    },
    rowContainerInputs: {
        width: '100%',
        height: '50%',
        marginBottom: 20, // Add margin bottom to create space between inputs and button
    },
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
    input: {
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 20, // Add margin top to create space between inputs and button
    },
});

export default Register;