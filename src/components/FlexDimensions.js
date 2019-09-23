
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FlexDirmensionsBasics extends Component {
    render() {
        return (
            //아래 view flex:1을 지우면 안보이게 됨.
            <View style={{ flex: 1, width: "100%" }}>
                <View style={{ flex: 1, backgroundColor: "red" }} />

                <View style={{ flex: 8, width: "100%", flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: "green" }} />


                </View>
            </View>
        );
    }
}



