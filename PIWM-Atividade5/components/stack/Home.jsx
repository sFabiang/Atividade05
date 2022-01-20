import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Button title='Cadastro' onPress={()=>this.props.navigation.navigate('Cadastro')} style={{ width: 100, alignSelf: 'center' }} />
                <Button title='IMC' onPress={()=>this.props.navigation.navigate('IMC')} style={{ width: 100, margin: 10, alignSelf: 'center' }} />
                <Button title='Sobre' onPress={()=>this.props.navigation.navigate('Sobre')} style={{ width: 100, margin: 10, alignSelf: 'center' }} />
            </View>
        )
    };
}
