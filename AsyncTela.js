import React, { Component } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard } from "react-native";
import Line from "./Line";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncTela extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            input: '',
        }

        this.gravaNome = this.gravaNome.bind(this)
    }

    async componentDidMount() {
        await AsyncStorage.getItem('nome').then((value) => {
            this.setState({ nome: value })
        })
    }

    async componentDidUpdate(_, prevState) {
        const nome = this.state.nome;

        if (prevState !== nome) {
            await AsyncStorage.setItem('nome', nome)
        }

        // console.log(prevState)
    }

    gravaNome() {
        this.setState({
            nome: this.state.input
        });

        alert('salvo com sucesso');
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={s.container}>
                <View style={s.viewInput}>
                    <TextInput style={s.input} value={this.state.input} onChangeText={(text) => { this.setState({ input: text }) }}
                        underlineColorAndroid='transparent' />

                    <TouchableOpacity onPress={this.gravaNome}>
                        <Text style={s.botao}>+</Text>
                    </TouchableOpacity>

                </View>
                <Text style={s.nome}>{this.state.nome}</Text>
                <Line />
            </View>
        );
    }
}


const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: 350,
        height: 40,
        borderColor: '#000',
        padding: 10,
        borderWidth: 1,
    },
    botao: {
        backgroundColor: '#222',
        color: '#fff',
        height: 40,
        padding: 10,
        marginLeft: 5,
    },
    nome: {
        fontSize: 30,
        marginTop: 15
    }
})

export default AsyncTela;