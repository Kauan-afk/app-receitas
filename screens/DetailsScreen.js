import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"
 
export default function DetailsScreen({navigation, route}){
    const {name, recipe} = route.params;
    
    return(
        <View style = {styles.app}>
            <Text style= {styles.title}>{name}</Text>
            <Text style= {styles.text}>{recipe}</Text>
            <Button title="Voltar" onPress={()=> navigation.goBack()}></Button>
        </View>
    )
}
 
const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: "center",
        margin: 10,
        justifyContent: "center",
        display: "flex",
        gap: 50
    },
 
    title: {
        fontSize: 25,
        fontWeight: "600"
    },
    text:{
        textAlign: "center",
        maxWidth: 300
    }
})