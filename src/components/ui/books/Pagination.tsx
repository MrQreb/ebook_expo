import globalStyles from '@/src/styles/globalStyles';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');

const Pagination = () => {
  return (
    <View style={styles.rowPagination}>
      <TouchableOpacity style={styles.buttonPagination}><Text style={styles.textButton}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonPagination}><Text style={styles.textButton}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonPagination}><Text style={styles.textButton}>3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonPagination}><Text style={styles.textButton}>...</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonPagination}><Text style={styles.textButton}>67</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonPagination}><Text style={styles.textButton}>69</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  rowPagination: {
    width: '90%',
    margin: 'auto',
    marginTop:35,
    marginBottom:35,
    height: height * 0.07,
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPagination: {
    width: '16.67%',
    height: height * 0.06,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: globalStyles.fonts.interSemiBold,
    fontWeight: 900,
    color: 'black',
    fontSize: 19
  }
});


export default Pagination
