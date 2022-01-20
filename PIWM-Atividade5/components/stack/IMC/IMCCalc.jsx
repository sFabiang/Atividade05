import React from "react"
import { Text, View } from 'react-native'
import IMCMsg from './IMCMsg'

const IMCCAlc = (props) => {

    const imc = (props.peso / (props.altura * props.altura))
    if (props.altura != null && props.peso != null)
        return (
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>
                    Seu IMC é {imc}
                </Text>
                <IMCMsg IMC={imc}/>
            </View>
        )
    return null
}
export default IMCCAlc