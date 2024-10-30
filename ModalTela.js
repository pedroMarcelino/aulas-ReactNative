import React, { Component } from "react";
import { View, StyleSheet, Button, Modal, Text } from "react-native";

class ModalTela extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
        }

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar() {
        this.setState({ modalVisible: true })
    }

    sair() {
        this.setState({ modalVisible: false })
    }

    render() {
        return (
            <View style={s.container}>
                <Button title="Entrar" onPress={this.entrar} />
                <Modal animationType="slide" style={s.modal} visible={this.state.modalVisible}>
                    <View>
                        <Text>Seja Bem-vindo!</Text>
                        <Button title="Sair" onPress={this.sair} />
                    </View>
                </Modal>
            </View>
        )
    }

}

const s = StyleSheet.create({
    container: {},
    modal: { marginTop: 300 },
})

export default ModalTela;