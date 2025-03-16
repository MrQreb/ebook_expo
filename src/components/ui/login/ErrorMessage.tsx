import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ErrorMessageProps{
    message?:string;
}

const ErrorMessage = ({ message }:ErrorMessageProps) => (
    <Text style={styles.errorText}>{message}</Text>
);

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 10,
    },
});

export default ErrorMessage;