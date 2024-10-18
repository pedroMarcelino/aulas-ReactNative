import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import Jobs from "./Jobs";
import State from "./States";
import Grupos from "./Grupos";
import Tamanhos from "./Tamanhos";
import Flexbox from "./Flexbox";
import Inputs from "./Inputs";
import FlatList from "./FlatList";


class App extends Component {
  render() {
    return (
      <ScrollView >
        <View style={{ marginBottom: 150 }}>
          <Jobs />
          <State />
          <Inputs />
          <Grupos />
          <Tamanhos />
          <Flexbox />
          {/* Comentado para nao dar gargalo com o scrollview */}
          {/* <FlatList /> */}
        </View>
      </ScrollView>

    )
  }
}


export default App;
