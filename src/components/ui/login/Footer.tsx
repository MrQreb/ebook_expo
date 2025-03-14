import { View, Text, StyleSheet, Dimensions } from "react-native"
import { Link, RelativePathString } from 'expo-router';
import globalStyles from "@/src/styles/globalStyles";

const { width, height } = Dimensions.get('window');

interface FooterLoginProps {
  text1: string;
  text2: string;
  href?: RelativePathString;
}

const FooterLogin = ({ href = "./defaultPath1", text1, text2 }: FooterLoginProps) => {
  return (
    <View style={styles.rowFooter}>

      <View style={styles.footerTextContainer}>
          <Text style={styles.footerText1}>{text1}</Text>
      </View>

      <View style={styles.footerTextContainer}>
        <Link href={href}>
          <Text style={styles.footerText2}>{text2}</Text>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rowFooter: {
    width: '100%',
    height: height * 0.2, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTextContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.02, 
    textAlign: 'center',
  },
  footerText1: {
    fontFamily: globalStyles.fonts.interRegular,
    color: globalStyles.colors.subTitle,
    fontSize: width * 0.04, 
  },
  footerText2: {
    fontFamily: globalStyles.fonts.interBold,
    color: globalStyles.colors.footerText,
    fontSize: width * 0.04, 
  },
});

export default FooterLogin