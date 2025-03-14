import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function PdfReader() {
  const pdfUrl = 'https://pdfobject.com/pdf/sample.pdf';
  const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

  return (
    <WebView
      style={styles.container}
      source={{ uri: viewerUrl }}
      startInLoadingState
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});