import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Sobre extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'light', marginBottom: 10, alignSelf: 'center' }}>bla vla vavaka vk k</Text>
                <Button title='HOME' onPress={() => this.props.navigation.goBack()} style={{ width: 100, margin: 10, alignSelf: 'center' }} />
            </View>
        )
    };
}