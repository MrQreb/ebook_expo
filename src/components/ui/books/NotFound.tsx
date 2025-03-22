import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';
import globalStyles from '@/src/styles/globalStyles';
import Button from '../login/Button';
import usePaginationStore from '@/src/store/pagination.store';

const NotFound = () => {

    let { setSearch, setIsSearched, isSearched } = usePaginationStore();


    const handlePress = () =>{
       setSearch('');
       setIsSearched(!isSearched);
    }

    return (
        <>
            <View style={styles.rowContainerBooks}>
                <View style={styles.rowTitle}>
                    <Text style={styles.title}>No se encontraron libros</Text>
                </View>

                <View style={styles.rowImage}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/svg/no_data.svg')}
                        contentFit="contain"
                    />
                </View>

                <View style={styles.rowSubtitle}>
                    <Text style={styles.subTitle}>Prueba otra busqueda!</Text>
                </View>

                <Button
                    text='Volver'
                    onPress={handlePress}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    rowContainerBooks: {
        width: '100%',
        height: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowTitle: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    rowImage: {
        flex: 4, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    rowSubtitle: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        fontFamily: globalStyles.fonts.interBold,
        fontSize: globalStyles.fontSizes.extraLarge,
        color: globalStyles.colors.title,
    },
    subTitle: {
        textAlign: 'center',
        fontFamily: globalStyles.fonts.jetBrainsMonoThin,
        fontSize: globalStyles.fontSizes.medium,
        color: globalStyles.colors.subTitle,
    },
});

export default NotFound;