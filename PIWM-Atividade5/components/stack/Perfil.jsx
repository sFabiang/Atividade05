import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Perfil extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>
          Nome : {this.props.nome}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>
          Idade : {this.props.idade}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>
          Email : {this.props.email}
        </Text>
      </View>
    )
  }
}
