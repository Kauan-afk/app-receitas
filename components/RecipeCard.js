import {  StyleSheet, Text, View, Button } from "react-native";

export function RecipeCard({navigation, name, recipe, descricao}) {
    return(
        <View style={style.container} >
            <Text style={style.title}>{name}</Text>
            <Text style={style.text}>{descricao}</Text>

            <Button title="Saiba mais" onPress={()=> navigation.navigate("Detalhes", {name, recipe})}/>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 10
                }}
                />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 30,
        width: "100%",
        marginVertical: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10
    },

    images: {
        width: '100%',
        borderRadius: 10,
        maxHeight: 400,
        elevation: 20,
        shadowColor: '#292929'
    },
    
    title: {
        fontWeight: "bold",
        fontSize: 25        
    },
    text: {
        fontSize: 17,
        maxWidth: 200
    }
})