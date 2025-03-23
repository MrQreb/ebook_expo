import useBooksStore from '@/src/store/books.store';
import globalStyles from '@/src/styles/globalStyles';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');

const Pagination = () => {

  const { currentPage, maxPage, setCurrentPage, numberResults } = useBooksStore();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
    }
  };

  const getPages = () => {
    const pages = new Set([
      1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage - 1,
      maxPage - 2,
      maxPage - 1,
      maxPage,
    ]);

    return Array.from(pages).filter(page => page >= 1 && page <= maxPage).sort((a, b) => a - b);
  };

  const pages = getPages();

  return (
    <>
      {numberResults >= 1 && (
        <View style={styles.rowPagination}>
          {pages.map((page) => (
            <TouchableOpacity
              key={page}
              onPress={() => handlePageChange(page)}
              style={styles.buttonPagination}
            >
              <Text style={[styles.textButton, currentPage === page && styles.selectedPage]}>{page}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({

  rowPagination: {
    width: '90%',
    margin: 'auto',
    marginTop: 35,
    marginBottom: 35,
    height: height * 0.07,
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPagination: {
    minWidth: 50,
    width: '15%',
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
  },
  selectedPage: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 12,
    textAlign: 'center',

  }
});


export default Pagination
