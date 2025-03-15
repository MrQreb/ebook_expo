import { View, StyleSheet,Text } from "react-native";
import { Image } from 'expo-image';
import globalStyles from '@/src/styles/globalStyles';
import FooterLogin from "@/components/ui/login/Footer";
import ButtonLogin from '@/components/ui/login/Button'; 
const handleLogin = () => {
    console.log('login');
};

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowImage}>
                <Image style={styles.image} source={require('../assets/svg/woman.svg')} />
            </View>

            <View style={styles.rowTitle}>
                <Text style={styles.title}>Bienvenido a ebooks</Text>
            </View>

            <View style={styles.rowSubtitle}>
                <Text style={styles.subTitle}>Estamos emocionados por nuestra biblioteca virtual</Text>
            </View>

            <ButtonLogin text="Login" onPress={handleLogin} />

            <FooterLogin text1="¿No tienes cuenta?" href="../register" text2="Crear una cuenta" />
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
    rowImage: {
        width: '100%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
    },
    rowTitle: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontFamily: globalStyles.fonts.interBold,
        fontSize: globalStyles.fontSizes.large,
        color: globalStyles.colors.title,
    },
    rowSubtitle: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subTitle: {
        textAlign: 'center',
        fontFamily: globalStyles.fonts.jetBrainsMonoThin,
        fontSize: globalStyles.fontSizes.small,
        color: globalStyles.colors.subTitle,
    },
});

export default Login;