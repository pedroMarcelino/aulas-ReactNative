import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Line from "./Line";

class Inputs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
        }

        this.pegaNome = this.pegaNome.bind(this);
    }

    pegaNome(nome) {
        if (nome.length > 0) {
            this.setState({ nome: 'Bem-vindo: ' + nome })
        } else {
            this.setState({ nome: nome })
        }
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput style={style.input} onChangeText={this.pegaNome} />
                <Text style={style.text}>{this.state.nome}</Text>
                <Line />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 25
    },
});

export default Inputs;