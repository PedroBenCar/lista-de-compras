import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ListaCompras() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  const adicionarItem = () => {
    if (item.trim() !== '') {
      setLista([...lista, item]);
      setItem('');
    }
  };

  const removerItem = (index: number) => {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBar} />
        <Text style={styles.headerText}>Lista de Compras</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Qual item adicionar?"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={adicionarItem}>
          <Ionicons name="checkmark" size={24} color="white" />
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <FlatList
          data={lista}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => removerItem(index)}>
                <Ionicons name="trash" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#9c27b0',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerBar: {
    height: 5,
    backgroundColor: '#e1bee7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    borderRadius: 15,
    padding: 5,
  },
});
