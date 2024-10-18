import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Line from "./Line";

class Flexbox extends Component {
    render() {
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
                    <View style={{ height: 50, backgroundColor: 'red' }}></View>
                    <View style={{ height: 50, backgroundColor: 'yellow' }}></View>
                    <View style={{ height: 50, backgroundColor: 'purple' }}></View>
                </View>
                <Line />
            </View>
        );
    }
}

export default Flexbox;