import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Drawer from '../components/ui/Drawer';
import Pagination from '../components/ui/books/Pagination';
import Search from '../components/ui/books/Search';
import Books from '../components/ui/books/Books';


const BooksScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Search></Search>
      <Books></Books>
      <Pagination></Pagination>
      <Drawer/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    minHeight: '100%',
  },

});

export default BooksScreen;