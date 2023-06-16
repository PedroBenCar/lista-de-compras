import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function UploadScreen() {
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    // Simulação do progresso do upload
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Compras</Text>
      </View>
      <View style={styles.content}>
        {/* Área para fazer upload de arquivo */}
        <TouchableOpacity style={styles.uploadArea}>
          <Text style={styles.uploadText}>Toque para fazer upload de arquivo</Text>
        </TouchableOpacity>
        {/* Texto de porcentagem */}
        <Text style={styles.progressText}>{progress}% concluído</Text>
        {/* Botão de upload */}
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
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
  },
  header: {
    backgroundColor: '#e1bee7',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerText: {
    color: '#9c27b0',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  uploadArea: {
    width: 200,
    height: 200,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: '#9c27b0',
    textAlign: 'center',
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
