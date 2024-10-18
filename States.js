import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Line from "./Line";

class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Pedro jobs',
        }

        this.clique = this.clique.bind(this)
    }


    clique(nome) {
        this.setState({
            nome: nome
        })
    }

    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Button title="Clique Aqui" onPress={() => this.clique('Nicolle Pereira')} />
                <Text style={{ fontSize: 23, color: 'red', textAlign: "center" }}>
                    {this.state.nome}
                </Text>
                <Line />
            </View>
        );
    }
}

export default State;