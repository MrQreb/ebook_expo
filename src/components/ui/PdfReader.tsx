import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

interface PdfReaderProps {
  pdfUrl: string;
}

export default function PdfReader({
  pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
}: PdfReaderProps) {
  const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;

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
