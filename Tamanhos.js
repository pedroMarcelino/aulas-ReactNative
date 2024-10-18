import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Line from "./Line";

class Tamanhos extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                <View style={{ flex: 1, backgroundColor: 'green' }}></View>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                <Line />
            </View>
        );
    }
}

export default Tamanhos;