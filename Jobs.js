import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Line from "./Line";

class Jobs extends Component {
    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <Text>Ola Mundo !!!</Text>
                <Text>PEdro Marcelino</Text>
                <Img largura={100} altura={200} nome={"Pedro Marcelino"}></Img>
            </View>
        );
    }
}

class Img extends Component {
    render() {
        let img = "https://sujeitoprogramador.com/steve.png";

        return (
            <View>
                <Image
                    source={{ uri: img }}
                    style={{
                        width: this.props.largura,
                        height: this.props.altura,
                        marginTop: 30,
                    }}
                />
                <Text>{this.props.nome}</Text>

                <Line />
            </View>
        );
    }
}

export default Jobs;
