import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyShopping</Text>
      <Text style={styles.subTitle}>Monte sua lista de compra para te ajudar com as compras</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Link
          style={styles.buttonText}
          href="/Sobre"
        >
          Entrar
        </Link>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Link
          style={styles.link}
          href="/RecuperarSenha"
        >
          Recuperar senha
        </Link>
        <Link
          style={styles.link}
          href="/CriarConta"
        >
          Criar minha conta
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
  },
  link: {
    marginHorizontal: 5,
    color: 'blue',
  },
});
