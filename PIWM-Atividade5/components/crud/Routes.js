import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'

import AddAlunoScreen from './AddAlunoScreen'
import EditAlunoScreen from './EditAlunoScreen'
import ListAlunoScreen from './ListAlunoScreen'

const MainStack = createStackNavigator()

function MainStackScreen(){
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name='AddAlunoScreen'
                    component={AddAlunoScreen}
                    options={{tittle:'Add New Aluno'}}
                />
                <MainStack.Screen
                    name='EditAlunoScreen'
                    component={EditAlunoScreen}
                    options={{tittle:'Edit New Aluno'}}
                />
                <MainStack.Screen
                    name='ListAlunoScreen'
                    component={ListAlunoScreen}
                    options={{tittle:'List New Aluno'}}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackScreen