import React, {useState, useEffect, useReducer} from 'react'
import {View, Text} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../../firebase/firebase_config'

const ListAlunoScreen = (props) => {

    const {alunos, setAlunos} = useState([])

    useEffect(
        () => {
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot)=>{
                    const alunos = []
                    queryOnSnapshot.docs.forEach(
                        (doc)=>{
                            const {name, sobrenome, curso, ira} = doc.data()
                            alunos.push({id:doc.id,name, sobrenome, curso, ira})
                        }
                    )
                    setAlunos(alunos)
                }
            )
        },
        []
    )

    return(
        <ScrollView>
            <Button 
                onPress={() => props.navigation.navigate('AddAlunoScreen')}
                title='Cadastrar Aluno'
            />
            {
                alunos.map(
                    (aluno) => {
                        return (
                            <ListItem 
                                key={aluno.id} 
                                bottomDivider 
                                onPress={
                                    ()=> {
                                        props.navigation.navigate('EditAlunoScreen',{alunoId:aluno.id})
                                    }
                                }>
                                <ListItem.Chevron/>
                                <Avatar rounded source={{url:'https://si3.ufc.br/sigaa/verFoto?idArquivo=1316858&key=223d9d1ff3990846473511c1776e9b50'}}/>
                                <ListItem.Content>
                                    <ListItem.Title>{aluno.name} {aluno.sobrenome}</ListItem.Title>
                                    <ListItem.Subtitle>{aluno.curso}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{aluno.ira}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        )
                    }
                )
            }
        </ScrollView>
    )
}

export default ListAlunoScreen