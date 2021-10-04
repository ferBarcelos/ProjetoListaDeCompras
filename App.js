import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native'

export default function App() {

  // Hooks - useState
  const [produto, setProduto] = useState('')
  const [produtos, setProdutos] = useState([])

  //SPREAD JS
  function handleAdicionarProduto() {
    setProdutos(vetorVelho => [...vetorVelho, produto])
    setProduto('')

  }


  function handleRemoverProduto(prodRemover) {
    setProdutos(vetorVelho => vetorVelho.filter(prod => prod !== prodRemover));
  }



  return (
    <View >
      <Text style={styles.title} >Lista de Compras</Text>
      <TextInput placeholder="Digite o produto!" value={produto} onChangeText={texto => setProduto(texto)} ></TextInput>

      <Button title="Adicionar" onPress={handleAdicionarProduto} onClick></Button>

      <FlatList
        data={produtos} keyExtractor={(item) => item}
        renderItem={({ item }) => <Produto data={item} />}
      />


    </View>
  );


  function Produto({ data }) {

    return (
      <View style={styles.produto}>
        <Text style={styles.nomes}>Nome: {data}</Text>
        <Button title="delete" onPress={() => handleRemoverProduto(data)}></Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,

  },
  produto: {
    backgroundColor: '#B5DEFF',
    height: 55,
    margin: 15
  },
  title: {
    color: '#000',
    fontSize: 30,
    alignSelf: 'center',
  },
  nomes: {
    fontSize: 15,
    padding: 6,
    alignSelf: 'baseline',
  }

}
);