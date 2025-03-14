import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native'
interface ScreenContainerProps {
    children: React.ReactNode;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});