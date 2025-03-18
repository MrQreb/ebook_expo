import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import globalStyles from '@/src/styles/globalStyles';
import ButtonLogin from '@/components/ui/login/Button';
import FooterLogin from '@/components/ui/login/Footer';
import PasswordInput from "../components/ui/login/PasswordInput";
import Input from '../components/ui/login/Input';
import Toast from 'react-native-toast-message';
import ErrorMessage from "../components/ui/login/ErrorMessage";
import { showModal } from "../helpers/show-modal";
import { useRouter } from "expo-router";
import { login } from '../api/auth/login';
import { redirectTo } from "../helpers/redirect-to";

const schema = z.object({
    email: z.string({
        errorMap: () => ({ message: 'Correo Requerido' })
    }).email('El correro electronico no valido'),

    password: z.string({
        errorMap: () => ({ message: 'Contraseña requerida' })
    }).min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

const LoginScreen = () => {
    const router = useRouter();

    const {
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema),
    });

    const handleRegister = async (data: { email: string; password: string; }) => {

        try {
            await login(data.email, data.password)
            showModal({ text1: '📖 Bienvenido a ebook', text2: 'Nos alegra tenerte de nuevo', type: 'success', visibilityTime: 1300 });
           redirectTo(router,'../books',1300)
        } catch (error: any) {
            console.log(error)
            if (error.message === 'incorrect password') showModal({ text1: '❌ Verifica tus credenciales', text2: 'Verifique correo o contraseña', type: 'error', visibilityTime: 3300 });
            if (error.message === 'email not found') showModal({ text1: '❌ Este correo no ha sido registrado', text2: 'Cree una nueva cuenta', type: 'info', visibilityTime: 3300 });
            // showModal({ text1: '❌ Verifique su red', text2: 'Arregle los errores de red', type: 'info', visibilityTime: 3300 })
        }

    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>


                <View style={styles.rowTitle}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                    <Text style={styles.subTitle}>Bienvenido de nuevo a ebook</Text>
                </View>

                {/* Inputs */}
                <View style={styles.rowContainerInputs}>
                    <Input
                        textInput="Correo Electrónico"
                        textPlaceHolder="Ingrese su correo"
                        onChangeText={(text) => setValue("email", text, { shouldValidate: true })}
                    />
                    {errors.email && <ErrorMessage message={errors.email?.message || ""} />}

                    <PasswordInput
                        onChangeText={(text) => setValue("password", text, { shouldValidate: true })}
                    />
                    {errors.password && <ErrorMessage message={errors.password?.message || ""} />}
                </View>

                <ButtonLogin text="Login" onPress={handleSubmit(handleRegister)} />
                <FooterLogin text1="¿No tienes cuenta?" href="./register" text2="Crear una cuenta" />
            </ScrollView>

            <Toast />
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
        height: '30%',
        marginBottom: 20,
    },
});

export default LoginScreen;