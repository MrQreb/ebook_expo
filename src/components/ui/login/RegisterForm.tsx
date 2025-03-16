import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/ui/login/Input';
import PasswordInput from '../components/ui/login/PasswordInput';
import ErrorMessage from './ErrorMessage';

const RegisterForm = ({ control, setValue, errors }) => (
    <View style={styles.rowContainerInputs}>
        <Input
            textInput="Correo Electrónico"
            textPlaceHolder="Ingrese su correo"
            onChangeText={(text) => setValue("email", text, { shouldValidate: true })}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <PasswordInput 
            onChangeText={(text) => setValue("password", text, { shouldValidate: true })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}

        <PasswordInput 
            onChangeText={(text) => setValue("confirmPassword", text, { shouldValidate: true })}
        />
        {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword.message} />}
    </View>
);

const styles = StyleSheet.create({
    rowContainerInputs: {
        width: '100%',
        height: '50%',
        marginBottom: 20,
    },
});

export default RegisterForm;