import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tab1 extends Component{
    static navigationOptions = {
        activeLabelColor: '#FF3856',
        title: "Tab 1",
        tabBarIcon: () => <View><Text>ico</Text></View>
    }

    render(){
        return(
            <View>
                <Text>Tab 1</Text>
            </View>
        )
    }
}

export default Tab1;