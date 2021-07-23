import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center', fontSize:20}}><Text>Home Screen for Stellar</Text></View>
        );
    }
}