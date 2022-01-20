import Home from './Home'
import Perfil from './Perfil'
import Sobre from './Sobre'
import IMCApp from './IMC/IMCApp'
import Cadastro from './Cadastro'
import Resultado from './Resultado'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const PilhaPrincipal = createStackNavigator()
const PilhaRaiz = createStackNavigator()

function PilhaPrincipalTelas() {
    return (
        <PilhaPrincipal.Navigator
            initialRouteName='Home'
        >
            <PilhaPrincipal.Screen name='Home' component={Home} />
            <PilhaPrincipal.Screen name='Cadastro' component={Cadastro} />
            <PilhaPrincipal.Screen name='IMC' component={IMCApp} />
            <PilhaPrincipal.Screen name='Sobre' component={Sobre} />
            <PilhaPrincipal.Screen name='Resultado' component={Resultado} />
            <PilhaPrincipal.Screen name='Perfil' component={Perfil} />
        </PilhaPrincipal.Navigator>
    )
}

function PilhaRaizTelas() {
    return (
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen
                    name='Principal'
                    component={PilhaPrincipalTelas}
                    options={{ headerShown: false }}
                />
                <PilhaRaiz.Screen
                    name='Perfil'
                    component={Perfil}
                    options={{ headerShown: false }} />
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default PilhaRaizTelas

