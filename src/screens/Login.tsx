import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/globlalStyles";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola</Text>
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
  text: {
    color: globalStyles.colors.text,
    fontSize: globalStyles.fontSizes.large,
    fontFamily: globalStyles.fonts.interBold, // Usa la fuente personalizada aquí
  },
});

export default Login;