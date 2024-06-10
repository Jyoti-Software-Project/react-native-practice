import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default class PasswordHideSecond extends Component {
  constructor(props) {
    super(props);
    this.state = { CPwordError: "", CPword: "", PwordError: "", Pword: "" };
  }

  render() {
    return (
      <View>
        <InputBox
          error={this.state.PwordError}
          keyboardType={"default"}
          onChangeText={Pword =>
            this.setState({
              Pword
            })
          }
          secureTextEntry={true}
          value={this.state.Pword}
          pHolder={"Password"}
          // color={"white"}
        />

        <InputBox
          error={this.state.CPwordError}
          keyboardType={"default"}
          onChangeText={CPword =>
            this.setState({
              CPword
            })
          }
          secureTextEntry={true}
          value={this.state.CPword}
          pHolder={"Confirm Password"}
          // color={"white"}
        />
      </View>
    );
  }
}

class InputBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder={this.props.pHolder}
          placeholderTextColor={"black"}
          {...this.props}
          style={this.props.color == "white"}
        />
      </View>
    );
  }
}