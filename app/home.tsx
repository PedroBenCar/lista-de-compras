import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./imagem.png')} style={styles.imagem} />
      <Text style={styles.titulo}>Cabra</Text>
      <View style={styles.telasContainer}>
        <View style={styles.row}>
          <Image source={require('./random1.png')} style={styles.tela} />
          <Image source={require('./random2.png')} style={styles.tela} />
        </View>
        <View style={styles.row}>
          <Image source={require('./random3.png')} style={styles.tela} />
          <Image source={require('./random4.png')} style={styles.tela} />
        </View>
        <View style={styles.row}>
          <Image source={require('./random5.gif')} style={styles.tela} />
          <Image source={require('./random6.png')} style={styles.tela} />
        </View>
        <View style={styles.row}>
          <Image source={require('./random7.png')} style={styles.tela} />
          <Image source={require('./random8.png')} style={styles.tela} />
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  telasContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tela: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
