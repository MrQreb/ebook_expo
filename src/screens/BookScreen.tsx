import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Drawer from '../components/ui/Drawer';
import Pagination from '../components/ui/books/Pagination';
import Books from '../components/ui/books/Book';


const BooksScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Books></Books>
      <Pagination></Pagination>
      <Drawer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    
  },

});

export default BooksScreen;