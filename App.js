// import {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ApiBtc from './components/ApiBTC';
import Pokedex from './components/Pokedex';

// const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
// const url2 = "https://jsonplaceholder.typicode.com/posts"

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();
  // const [response, setResponse] = useState();
  // ///////////////////////////////////////////
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(url2)
  //   .then((response) => response.json())
  //   .then((json) => setData(json))
  //   .catch((error) => console.log(error))
  //   .finally(() => setLoading(false))
  // }, []);
//PRIMERO
  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then((result) => {
  //     setIsLoading(false);
  //     setResponse(result);
  //   },
  //   (error) => {
  //     setIsLoading(false);
  //     setError(error);
  //   })
  // }, []);

  // const getContent = () => {
  //   if (isLoading) {
  //     return <ActivityIndicator size='large' />
  //   }
  //   if(error){
  //     return <Text>{error}</Text>
  //   }
  //   return(
  //     //<Text>BTC to USD | rate: ${response["bpi"]["USD"].rate}</Text>
  //     <Text>Titulo: {response[0]['title']}</Text>
  //   );
  // }
////////////////////////////////
  // console.log(response)

  // const getContent = () => {
  //   return (
  //   loading ? (
  //   <ActivityIndicator size="large" />
  //   ) : (
  //     data.map(element => (
  //       <Text>Titulo: {element.title}</Text>
  //     ))
  // ))};

  return (
    <View style={styles.container}>

      {/* {getContent()} */}
      <Pokedex/>
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
});