import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Button, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '../../firebase/firebase_config'

const EditAlunoScreen = (props) => {
    const initialState = { id: '', name: '', sobrenome: '', curso: '', ira: '' }
    const [aluno, setAluno] = useState(initialState)

    useEffect(
        () => {
            getAlunoById(props.route.params.alunoId)
        },
        []
    )

    const getAlunoById = async (id) => {
        const dbRef = firebase.db.collection('alunos').doc(id)
        const doc = await dbRef.get()
        const aluno = doc.data()
        setAluno({ ...aluno, id: doc.id })
    }

    const deleteAluno = async () => {
        const dbRef = firebase.db.collection('alunos').doc(props.route.params.alunoId)
        await dbRef.delete()
        props.navigation.navigate('ListAlunoScreen')
    }    

    const handleChangeText = (value, prop) => {
        setAluno({...state, [prop]:value})
    }

    const atualizarAluno = async () => {
        const alunoRef = firebase.db.collection('alunos').doc(aluno.id)
        await alunoRef.set({
            name: aluno.name,
            sobrenome: aluno.sobrenome,
            curso: aluno.curso,
            ira: aluno.ira,
        })
        setAluno(initialState)
        props.navigation.navigate('ListAlunoScreen')
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput placeholder='Name' styles={styles.inputGroup} value={aluno.name} onChangeText={(value) => handleChangeText(value, 'name')}/>
            </View>
            <View>
                <TextInput placeholder='Sobrenome' styles={styles.inputGroup} value={aluno.sobrenome} onChangeText={(value) => handleChangeText(value, 'sobrenome')}/>
            </View>
            <View>
                <TextInput placeholder='Curso' styles={styles.inputGroup} value={aluno.curso} onChangeText={(value) => handleChangeText(value, 'curso')}/>
            </View>
            <View>
                <TextInput placeholder='IRA' styles={styles.inputGroup} value={aluno.ira} onChangeText={(value) => handleChangeText(value, 'ira')}/>
            </View>
            <View>
                <Button title='Atualizar' onPress={() => atualizarAluno()}/>
            </View>
            <View>
                <Button title='Deletar' color='#fc4c4c' onPress={() => deleteAluno()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        top: 0,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    }
})

export default EditAlunoScreen