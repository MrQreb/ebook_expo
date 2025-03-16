import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import globalStyles from '@/src/styles/globalStyles';
import ButtonLogin from '@/components/ui/login/Button';
import FooterLogin from '@/components/ui/login/Footer';
import { useState } from 'react';
import PasswordInput from "../components/ui/login/PasswordInput";
import Input from '../components/ui/login/Input';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const checkPassword = (firstText: string, secondText: string): boolean => {
        return firstText === secondText;
    }


    const handleLogin = () => {
        const correctPassword = checkPassword(password,confirmPassword);
        console.log(correctPassword)
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    
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

                {/* Inputs */}
                <View style={styles.rowContainerInputs}>

                    <Input
                        onChangeText={setEmail}
                        textInput="Correo Electronico"
                        textPlaceHolder="Ingrese su correo"
                        value={email}
                    />
                    <PasswordInput value={password} onChangeText={setPassword} />
                    <PasswordInput value={confirmPassword} onChangeText={setConfirmPassword} />

                </View>

                <ButtonLogin text="Crear" onPress={handleLogin} />

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
        marginBottom: 20,
    },
});

export default Register;