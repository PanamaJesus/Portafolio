import React from "react";
import { Text, View} from "react-native";
import Button from "../components/Button";

export default function Home({navigation}){
    return (
        <View>
            <Text>Hola soy el home</Text>
            <Button
                onPress={() => {
                    navigation.navigate('Profile')
                }}
            />
        </View>
    );
}