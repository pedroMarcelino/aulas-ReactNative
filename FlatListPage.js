import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

class ListaFlat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            feed: [
                { id: 1, nome: 'Pedro', idade: 40, email: 'p@g.c' },
                { id: 2, nome: 'Nicolle', idade: 35, email: 'n@g.c' }
            ],

        }
    }



    render() {
        return (
            <View style={style.container}>
                <FlatList keyExtractor={(item) => item.id} data={this.state.feed} renderItem={({ item }) => <Pessoa data={item} />} />
            </View>
        );
    }
}




const style = StyleSheet.create({
    container: {
        flex: 1
    },
});


export default ListaFlat

class Pessoa extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.data.nome}</Text>
                <Text>{this.props.data.idade}</Text>
                <Text>{this.props.data.email}</Text>
            </View>
        );
    }
}