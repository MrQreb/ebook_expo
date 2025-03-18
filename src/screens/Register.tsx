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
import { createAccount } from "@/src/api/auth/createAccount"; 

const schema = z.object({
    email: z.string({
        errorMap: () => ({ message: 'Correo Requerido' })
    }).email('El correro electronico no valido'),

    password: z.string({
        errorMap: () => ({ message: 'Contraseña requerida' })
    }).min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),

    confirmPassword: z.string({
        errorMap: () => ({ message: 'Confirmación requerida' })
    }).min(6, { message: 'La confirmacion debe tener al menos 6 caracteres' }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
});

const Register = () => {
    const router = useRouter();

    const {
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema),
    });

    const handleRegister = async (data: { email: string; password: string; confirmPassword: string }) => {
        try {

            await createAccount(data.email, data.password);
            showModal({ text1: '🎉 Registro Exitoso', text2: 'Has sido registrado en ebook', type: 'success', visibilityTime: 1300 });
            setTimeout(() => {
                router.replace('/');
            }, 1300);


        } catch (error: any) {
            showModal({ text1: ' Error en la red', text2: 'Verifique su conexión a internet', type: 'success', visibilityTime: 6000 });
            if(error.message === 'email already exists' )  showModal({ text1: ' Correo previamente usado', text2: 'Este correo ya ha sido registrado', type: 'info', visibilityTime: 1300 });
        }
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
                        textInput="Correo Electrónico"
                        textPlaceHolder="Ingrese su correo"
                        onChangeText={(text) => setValue("email", text, { shouldValidate: true })}
                    />
                    {errors.email && <ErrorMessage message={errors.email?.message || ""} />}

                    <PasswordInput
                        onChangeText={(text) => setValue("password", text, { shouldValidate: true })}
                    />
                    {errors.password && <ErrorMessage message={errors.password?.message || ""} />}

                    <PasswordInput
                        onChangeText={(text) => setValue("confirmPassword", text, { shouldValidate: true })}
                    />
                    {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword.message || ""} />}
                </View>

                <ButtonLogin text="Crear" onPress={handleSubmit(handleRegister)} />
                <FooterLogin text1="¿Tienes cuenta?" href="./login" text2="Inicia Sesión" />
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
        height: '50%',
        marginBottom: 20,
    },
});

export default Register;