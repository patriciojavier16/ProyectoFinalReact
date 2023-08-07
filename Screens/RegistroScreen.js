import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo electrónico"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su edad"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Ingrese su contraseña"
        />
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}
          onPress={() => navigation.navigate('HOMETAB')}
        >Confirmar Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}
          onPress={() => navigation.navigate('Login')}
        > Ir a Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
