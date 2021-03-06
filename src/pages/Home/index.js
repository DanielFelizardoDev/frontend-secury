import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { Container, Title, Button, ButtonText } from "./styles";

export default class App extends Component {
  static navigationOptions = {
    title: "Security Total",
    headerTransparent: true,
    headerTintColor: "#fff"
  };

  state = {
    option: null
  };

  async componentDidMount() {
    const { option } = this.state;

    const optionState = await AsyncStorage.getItem("@Security:Option", option);

    if (optionState === "Police") {
      const police = await AsyncStorage.getItem("@Security:police");
      const parsed = JSON.parse(police);
      if (parsed) {
        this.props.navigation.navigate("NavPolice");
      } else {
        this.props.navigation.navigate("Police");
      }
    }

    if (optionState === "User") {
      const user = await AsyncStorage.getItem("@Security:user");
      const parsed = JSON.parse(user);
      if (parsed) {
        this.props.navigation.navigate("NavUser");
      } else {
        this.props.navigation.navigate("User");
      }
    }
  }

  handlerPolice = async () => {
    const option = "Police";

    await AsyncStorage.setItem("@Security:Option", option);
    this.setState({ option: "Police" });

    this.props.navigation.navigate("Police");
  };

  handlerUser = async () => {
    const option = "User";

    await AsyncStorage.setItem("@Security:Option", option);
    this.setState({ option: "User" });

    this.props.navigation.navigate("User");
  };

  render() {
    return (
      <Container>
        <Title>Qual sua escolha?</Title>
        <Button onPress={this.handlerPolice}>
          <ButtonText>Police</ButtonText>
        </Button>
        <Button onPress={this.handlerUser}>
          <ButtonText>User</ButtonText>
        </Button>
      </Container>
    );
  }
}
