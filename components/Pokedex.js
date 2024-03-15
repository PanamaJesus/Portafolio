import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, FlatList, Image} from 'react-native';

const url = "https://pokeapi.deno.dev/pokemon";

export default function Post(){

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                setIsLoading(false);
                setData(result);
            }, error => {
                setIsLoading(false);
                setError(error);
            })
    }, []);

    const getContent = () => {
        if(isLoading){
            return(
                <View> 
                    <Text style={styles.textProps} > Loading Data...</Text>
                    <ActivityIndicator size='large' color='green' />
                </View>
            );
        }
        if(error){
            return <Text>{error}</Text>
        }
        return(
            <View>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => (
                        <View>
                            <Image style={styles.image}source={{uri: item.imageUrl}} />
                            <Text>Name: {item.name}</Text>
                            <Text>Genus: {item.genus}</Text>
                            <Text>Type: {item.types}</Text>
                            <Text>Abilities: {item.abilities["name"]}</Text>
                            <Text>Description: {item.description}</Text>
                            <Text>Location: {item.locations} </Text>
                            <Text>Stats: {item.stats.HP}</Text>
                            
                        </View>    
                    )}
                />
            </View>
        );
    }
    console.log(data);

    return(
        <View> 
            {getContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    textProps: {
        fontSize: 34,
    },
    image:{
        width:100,
        height:100
    },
})