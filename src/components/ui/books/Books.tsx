import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { BookOpen } from 'lucide-react-native';
import globalStyles from '@/src/styles/globalStyles';
import { Ebook, getBooks } from '@/src/api/ebook/getBooks';
import { useEffect, useState } from 'react';
import { useRouter } from "expo-router";
import useBooksStore from '@/src/store/books.store';
import NotFound from './NotFound';

const { height, width } = Dimensions.get('window');
const Books = () => {

    const { currentPage, setMaxPage, search, isSearched, setNumberResults } = useBooksStore();


    const router = useRouter();

    let [ebooks, setEbooks] = useState<[]>([]);
    const fetchEbooks = async () => {
        try {

            const data = await getBooks({ limit: 2, page: currentPage, name: search, author:search });
            setMaxPage(data.meta.maxPages)
            setEbooks(data.ebooks);

            setNumberResults(data.ebooks.length);
        } catch (error) {
            setEbooks([]);
            
            // conditional render in Pagination
            setNumberResults(0);
        }
    }

    useEffect(() => {
        fetchEbooks();
    }, [currentPage, isSearched])

    return (
        <>
            {
                ebooks.length >= 1 ? (
                    <View style={styles.rowContainerBooks}>
                        {ebooks.map((ebook: Ebook, index) => (

                            <View key={index} style={styles.rowBoook}>

                                <View style={styles.rowImage}>
                                    <Image
                                        source={{ uri: ebook.ebook_image_url }}
                                        style={styles.image}
                                        contentFit="fill"
                                    />
                                </View>

                                <View style={styles.rowTitle} >
                                    <Text style={styles.textTitle} numberOfLines={2}>{ebook.ebook_name}</Text>
                                </View>

                                <View style={styles.rowAuthor}>
                                    <Text style={styles.textAuthor} numberOfLines={2}>{ebook.ebook_author} ({ebook.ebook_published})</Text>
                                </View>

                                <TouchableOpacity
                                    style={styles.rowButton}
                                    onPress={() => {
                                        router.navigate(`../read?ebookUrl=${(ebook.ebook_pdf_url)}`);
                                    }}
                                >
                                    <Text style={styles.texButton}>Leer</Text>
                                    <BookOpen size={18} color={'white'} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                ) : (
                    <NotFound />
                )

            }


        </>
    )
}

const styles = StyleSheet.create({
    rowContainerBooks: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        marginTop: 50,
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    rowBoook: {
        width: '48%',
        height: height * 0.45,
        backgroundColor: '#D6D1CD',
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
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
        textTransform: 'capitalize',
    },
    rowAuthor: {
        width: '90%',
        height: '10%',
        marginTop: 5,
    },
    textAuthor: {
        fontFamily: globalStyles.fonts.jetBrainsMonoRegular,
        color: 'black',
        fontSize: 11,
        textTransform: 'capitalize'
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
