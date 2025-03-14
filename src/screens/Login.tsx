import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');

const Login = () => {
  return (
    <View style={styles.container}>

      <View style={styles.rowImage}>
        <Image style={styles.image} source={require('../assets/svg/woman.svg')}></Image>
      </View>
      
      <View style={styles.rowTitle}>
        <Text style={styles.title}>Bienvenido a ebooks</Text>
      </View>
      
      <View style={styles.rowSubtitle}>
        <Text style={styles.subTitle}>Estamos emocionados por nuestra biblioteca virtuals</Text>
      </View>
      
      <View style={styles.rowButton}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.rowFooter}>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText1}>¿No tienes cuenta?</Text>
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText2}>Crear una Cuenta</Text>
        </View>
      </View>

    </View>
  );
}

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
    resizeMode: 'contain',
  },
  rowTitle: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontFamily: globalStyles.fonts.interBold,
    fontSize: globalStyles.fontSizes.large,
    color: globalStyles.colors.title
  },
  rowSubtitle: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: globalStyles.fonts.jetBrainsMonoThin,
    fontSize: globalStyles.fontSizes.small,
    color: globalStyles.colors.subTitle
  },
  rowButton: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    backgroundColor:globalStyles.colors.backgroundButton,
    borderColor:'black',
    borderWidth: 1.5
  },
  buttonText: {
    fontSize: globalStyles.fontSizes.medium,
    fontFamily:globalStyles.fonts.interSemiBold,
    color:globalStyles.colors.subTitle,
  },
  rowFooter: {
    width: '100%',
    height: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    textAlign: 'center',

  },
  footerText1: {
    fontFamily:globalStyles.fonts.interRegular,
    color:globalStyles.colors.subTitle,
    fontSize:globalStyles.fontSizes.medium

  },
  footerText2: {
    fontFamily:globalStyles.fonts.interBold,
    color:globalStyles.colors.footerText,
    fontSize:globalStyles.fontSizes.medium

  },
});

export default Login;