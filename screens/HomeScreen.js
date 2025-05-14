import React from "react"
import {View, Text, StyleSheet} from "react-native"
import { Recipes } from "../hooks/Recipes"
import { RecipeCard } from "../components/RecipeCard"
import { ScrollView } from "react-native-gesture-handler"
export default function HomeScreen({navigation}){
   
    return(
        <View style = {styles.app}>
            <ScrollView>
            <Text style= {styles.title}>Receitas</Text>
            <View style= {styles.buttonsView}>
                {Recipes.map(recipe =>{
                    return(
                        <View key={recipe.name}>
                            <RecipeCard name={recipe.name} recipe={recipe.recipe} descricao={recipe.descricao} navigation={navigation}/>
                        </View>
                    )
                })}
                
            </View>
            </ScrollView>

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
        gap: 50,
    },

    buttonsView: {
        display: "flex",
        gap: 20
    },
 
    title: {
        fontSize: 25,
        fontWeight: "600"
    },
    text:{
        textAlign: "center"
    }
})