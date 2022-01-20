import React, { useState } from 'react'
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../../firebase/firebase_config'

const AddAlunoScreen = (props) => {

    const initialState = {name:'', sobrenome:'', curso:'', ira:''}
    const [state, setState] = useState(initialState)

    const AddNewAluno = async () => {
        try{
            await firebase.db.collection('alunos')
            .add({
                name: state.name, 
                sobrenome: state.sobrenome, 
                curso: state.curso, 
                ira: state.ira
            })
            props.navigation.navigate('ListAlunoScreen')
        }catch(error){
            console.log(error)
        }
        
    }

    const handleChangeText = (value, name) => {
        setState({...state, [name]:value})
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.textInput}>
                <TextInput placeholder='Name' value={state.name} onChangeText={(value) => handleChangeText(value,'name')}/>
            </View>
            <View style={styles.textInput}>
                <TextInput placeholder='Sobrenome' value={state.sobrenome} onChangeText={(value) => handleChangeText(value,'sobrenome')}/>
            </View>
            <View style={styles.textInput}>
                <TextInput placeholder='Curso' value={state.curso} onChangeText={(value) => handleChangeText(value,'curso')}/>
            </View>
            <View style={styles.textInput}>
                <TextInput placeholder='IRA' value={state.ira} onChangeText={(value) => handleChangeText(value,'ira')}/>
            </View>
            <View>
                <Button title='Adicionar aluno' onPress={() => AddNewAluno()}/>
            </View>
            <View>
            <Button onPress={() => props.navigation.navigate('EditAlunoScreen')} title='Editar Aluno' color='#fc4c4c'/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInput: {
        flex: 1,
        padding: 0,
        top: 0,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    }
})

export default AddAlunoScreen