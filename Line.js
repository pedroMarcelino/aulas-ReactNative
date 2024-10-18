import React, { Component } from "react";
import { Text } from "react-native";

class Line extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={{ marginTop: this.props.marginT }} numberOfLines={1} >
                _______________________________________________________
            </Text>
        );
    }
}

export default Line;