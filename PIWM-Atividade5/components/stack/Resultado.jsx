import React, { Component } from "react"
import { View, Text, TextInput, Button } from 'react-native'
import IMCCAlc from '../stack/IMC/IMCCalc'

export default class Resultado extends Component {

    mostrarIMC(){
        if(this.state.click)
            return (
                <IMCCAlc altura={this.state.altura} peso={this.state.peso}/>
            )
    }

    render() {
        return (
            <View>
                {this.mostrarIMC()}
                <Button title='HOME' onPress={() => this.props.navigation.goBack()} style={{ width: 100, margin: 10, alignSelf: 'center' }} />
            </View>
        )
    }
}