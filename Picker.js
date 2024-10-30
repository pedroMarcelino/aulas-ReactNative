import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

import Line from './Line';

export default class PickerClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pizza: 0,
            pizzas: [
                { key: 1, nome: 'calabresa', valor: 5.00 },
                { key: 2, nome: 'brigadiero', valor: 10.00 },
                { key: 3, nome: 'frango', valor: 20.00 },
                { key: 4, nome: 'brocolis', valor: 30.00 },
                { key: 5, nome: 'atum', valor: 40.00 },
                { key: 6, nome: '4 queijos', valor: 50.00 },
            ]
        }
    }

    render() {

        let pizzasItem = this.state.pizzas.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        })

        return (
            <View style={s.container}>
                <Text style={s.logo}>Menu de Pizzas</Text>

                <Picker
                    selectedValue={this.state.pizza}
                    onValueChange={(itemValue, itemIndex) => { this.setState({ pizza: itemValue }) }}>
                    {pizzasItem}
                </Picker>

                <Text style={s.pizzas}>Voce escolheu:{this.state.pizzas[this.state.pizza].nome}</Text>
                <Text style={s.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor}</Text>

                <Line />
            </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    logo: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    pizzas: {
        marginTop: 15,
        fontSize: 28,
        textAlign: 'center'
    },
});