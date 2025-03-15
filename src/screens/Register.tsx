import { View, StyleSheet, Text, Dimensions, TextInput } from "react-native";
import globalStyles from '@/src/styles/globalStyles';
import FooterLogin from "@/components/ui/login/Footer";
import ButtonLogin from '@/components/ui/login/Button';

const handleLogin = () => {
    console.log('login');
};

const Register = () => {
    return (
        <View style={styles.container}>

            <View style={styles.rowTitle}>
                <Text style={styles.title}>Crear Cuenta</Text>
                <Text style={styles.subTitle}>Nos alegra tenerte en ebook</Text>
            </View>

            <View style={styles.rowContainerInputs}>

                <View style={styles.rowInputs}>
                    <Text style={styles.inputText}>Correo Electronico</Text>
                    <TextInput style={styles.input} placeholder="Escribe aquí..."
                    ></TextInput>
                </View>

                <View style={styles.rowInputs}>
                    <Text style={styles.inputText}>Contraseña</Text>
                    <TextInput style={styles.input} placeholder="Escribe aquí..."
                    ></TextInput>
                </View>

                <View style={styles.rowInputs}>
                    <Text style={styles.inputText}>Confirmar Contraseña</Text>
                    <TextInput style={styles.input} placeholder="Escribe aquí..."
                    ></TextInput>
                </View>

            </View>

            <ButtonLogin text="Crear" onPress={handleLogin} />

            <FooterLogin text1="¿No tienes cuenta?" href="./create" text2="Crear una cuenta" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.colors.background,
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
        fontSize: globalStyles.fontSizes.medium,
        color: globalStyles.colors.subTitle,
    },


    rowContainerInputs: {
        width: '100%',
        height: '50%',
        // backgroundColor: 'white',
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
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        height: '60%',
        width: '100%',
    },

});

export default Register;