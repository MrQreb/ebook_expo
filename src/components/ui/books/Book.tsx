import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
const { height } = Dimensions.get('window');
import { BookOpen } from 'lucide-react-native';
import globalStyles from '@/src/styles/globalStyles';

const Books = () => {
    return (
        <>
            <View style={styles.rowContainerBooks}>

                <View style={styles.rowBoook}>

                    <View style={styles.rowImage}>
                        <Image
                            source={{
                                uri: 'https://static0planetadelibroscommx.cdnstatics.com/usuaris/libros/fotos/370/m_libros/portada_alas-de-onix-empireo-3_rebecca-yarros_202412091938.jpg'
                            }}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.rowTitle} >
                        <Text style={styles.textTitle} numberOfLines={2}>DC Comics: Generations DC Comics: Generations  dasdsadsa</Text>
                    </View>

                    <View style={styles.rowAuthor}>
                        <Text style={styles.textAuthor} numberOfLines={1}>Rebecca Yarros</Text>
                    </View>

                    <TouchableOpacity style={styles.rowButton}>
                        <Text style={styles.texButton}>Leer</Text>
                        <BookOpen size={18} color={'white'}></BookOpen>
                    </TouchableOpacity>

                </View>

                <View style={styles.rowBoook}>

                    <View style={styles.rowImage}>
                        <Image
                            source={{
                                uri: 'https://static0planetadelibroscommx.cdnstatics.com/usuaris/libros/fotos/370/m_libros/portada_alas-de-onix-empireo-3_rebecca-yarros_202412091938.jpg'
                            }}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.rowTitle} >
                        <Text style={styles.textTitle} numberOfLines={2}>DC Comics: Generations DC Comics: Generations  dasdsadsa</Text>
                    </View>

                    <View style={styles.rowAuthor}>
                        <Text style={styles.textAuthor} numberOfLines={1}>Rebecca Yarros</Text>
                    </View>

                    <TouchableOpacity style={styles.rowButton}>
                        <Text style={styles.texButton}>Leer</Text>
                        <BookOpen size={18} color={'white'}></BookOpen>
                    </TouchableOpacity>

                </View>
            {/* Container books */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    rowContainerBooks: {
        width: '100%',
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        gap: 15,
        marginTop: 50,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    rowBoook: {
        width: 200,
        height: height * 0.35,
        backgroundColor: '#D6D1CD',
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',

    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode:'contain'
    },
    rowImage: {
        width: '85%',
        height: '60%',
        marginTop: 20,
        borderRadius: 10
    },
    rowTitle: {
        width: '90%',
        height: '10%',
        marginTop: 10,
    },
    textTitle: {
        fontFamily: globalStyles.fonts.jetBrainsMonoBold,
        color: 'black',
        fontSize: 13,
    },
    rowAuthor: {
        width: '90%',
        height: '5%',
        marginTop: 5,
    },
    textAuthor: {
        fontFamily: globalStyles.fonts.jetBrainsMonoRegular,
        color: 'black',
        fontSize: 11
    },
    rowButton: {
        width: '80%',
        height: '10%',
        backgroundColor: '#3A5A77',
        marginTop: 5,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    texButton: {
        fontFamily: globalStyles.fonts.jetBrainsMonoBold,
        color: 'white',
        fontSize: 15
    }


});

export default Books
