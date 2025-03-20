import usePaginationStore from "@/src/store/pagination.store";
import globalStyles from "@/src/styles/globalStyles";
import { SearchIcon } from "lucide-react-native";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native"

const Search = () => {

    const {search, setSearch, isSearched, setIsSearched } = usePaginationStore();

    const handleText = (text: string) => {
        setSearch(text);
    }

    const handleSearch = () => {
        setIsSearched(!isSearched);
    }


    return (
        <View style={styles.rowSearch}>
            <TextInput
                style={styles.input}
                placeholder="Buscar un libro"
                placeholderTextColor="#4E4E4E"
                onChangeText={handleText} 
            />
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={handleSearch}
                >
                
                <SearchIcon size={'40%'} color={'black'} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    rowSearch: {
        width: '80%',
        height: '5%',
        backgroundColor: '#ECE6F0',
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginLeft: '10%'
    },
    input: {
        flex: 4,
        fontSize: 16,
        color: '#4E4E4E',
        fontFamily: globalStyles.fonts.interSemiBold,
        paddingLeft: '10%',

    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#4E4E4E',
        fontFamily: globalStyles.fonts.interSemiBold,
        width: 'auto',
    },
});


export default Search
