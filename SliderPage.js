import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import Line from "./Line";

class SliderPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valor: 0,
            status: false,
        }
    }

    render() {
        return (
            <View style={s.container}>
                <Slider minimumValue={0} maximumValue={100} value={this.state.valor} step={1}
                    onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })} />
                <Text style={{ textAlign: "center", fontSize: 30 }}>{this.state.valor}</Text>

                <Line />

                <Switch value={this.state.status} onValueChange={(value) => this.setState({ status: value })} />
                <Text>Valor: {(this.state.status) ? 'ativo' : 'inativo'}</Text>
            </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
})

export default SliderPage;