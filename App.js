import React, { Component } from "react";
import { ScrollView, View, FlatList } from "react-native";
import Jobs from "./Jobs";
import State from "./States";
import Grupos from "./Grupos";
import Tamanhos from "./Tamanhos";
import Flexbox from "./Flexbox";
import Inputs from "./Inputs";
import FlatListPage from "./FlatListPage";
import Picker from "./Picker";
import SliderPage from "./SliderPage";


class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginBottom: 150 }}>
          <Jobs />
          <State />
          <Inputs />
          <Grupos />
          <Tamanhos />
          <Flexbox />
          {/* Comentado para nao dar gargalo com o scrollview */}
          {/* <FlatList /> */}
          <Picker />
          <SliderPage />
        </View>
      </ScrollView>

    )
  }
}


export default App;
