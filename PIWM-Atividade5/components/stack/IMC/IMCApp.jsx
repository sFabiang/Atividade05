import React, { Component } from "react"
import { View, Text, TextInput, Button } from 'react-native'
import IMCCAlc from './IMCCalc'

export default class IMCApp extends Component {
    
    constructor(props) {
        super(props)
        this.state = { altura: null, peso: null, click: false }
    }
    
    clickBotao = () =>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({click:true})
        }
    }

    mostrarIMC(){
        if(this.state.click)
            return (
                <IMCCAlc altura={this.state.altura} peso={this.state.peso}/>
            )
    }

    render() {
        return (
            <View>
                <Text>Sua altura (m):</Text>
                
                <TextInput 
                onChangeText={(altura) => this.setState({altura:altura})} 
                placeholder="Exemplo: 1.80" 
                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}/>
                
                <Text>Seu peso (kg):</Text>
                
                <TextInput 
                onChangeText={(peso) => this.setState({peso:peso})} 
                placeholder="Exemplo: 80" 
                style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}/>
                
                <Button title="CALCULAR" onPress={this.clickBotao} style={{ width: 100, marginBottom: 10, alignSelf: 'center' }}/>
                <Button title='HOME' onPress={() => this.props.navigation.goBack()} style={{ width: 100, margin: 10, alignSelf: 'center' }} />
                {this.mostrarIMC()}
            </View>
        )
    }
}