import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StackScreen(){
    return (
        <View>
            <Text style={styles.text}> Hola Mundo soy el Stack </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignItems: 'center',
        marginTop: '20%',
    },
})
