import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Line from "./Line";

class Grupos extends Component {
    render() {
        return (
            <View style={styles.area}>
                <Text>Eu sou o texto 1</Text>
                <Text style={styles.textPrin}>Eu sou o texto 2</Text>
                <Text>Eu sou o texto 3</Text>
                <Text style={styles.alignText}>Eu sou o texto 4</Text>
                <Line />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    area: {
        marginTop: 40,
    },
    textPrin: {
        fontSize: 25,
        color: 'red',
    },
    alignText: {
        textAlign: 'center',
        color: 'blue'
    }
});

export default Grupos;