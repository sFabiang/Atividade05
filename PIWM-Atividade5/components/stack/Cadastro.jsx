import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import Perfil from './Perfil';

export default class Cadastro extends Component {
   
    constructor(props) {
        super(props)
        this.state = { nome: null, idade: null, email: null, click: false }
    }

    clickBotao = () =>{
        if(this.state.nome != null && this.state.idade != null && this.state.email != null){
            this.setState({click:true})
        }
    }

    mostrarPerfil(){
        if(this.state.click)
            return (
                <Perfil nome={this.state.nome} idade={this.state.idade} email={this.state.email}/>
            )
    }

    render() {
        return (
            <View>
                <Text>Nome</Text>
                
                <TextInput
                    onChangeText={(nome) => this.setState({ nome: nome })}
                    style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }} />
                <Text>Idade</Text>
                
                <TextInput
                    onChangeText={(idade) => this.setState({ idade: idade })}
                    style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }} />
                
                <Text>Email</Text>
                
                <TextInput
                    onChangeText={(email) => this.setState({ email: email })}
                    style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }} />
                
                <Button title='OK' onPress={this.clickBotao} onPress={() => this.props.navigation.navigate('Perfil')} style={{ width: 100, margin: 10, alignSelf: 'center' }} />
                
                <Button title='HOME' onPress={() => this.props.navigation.goBack()} style={{ width: 100, margin: 10, alignSelf: 'center' }} />
            </View>
        )
    };
}