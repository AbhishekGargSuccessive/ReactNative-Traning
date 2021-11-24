import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface StoreCounter {
    counter: number;
    state: object;
}

const Counterdemo = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state: StoreCounter) => state.counter)


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', }}>
            <View style={{ width: 200, justifyContent: "center", alignItems: 'center', }}>

                <Animatable.Text
                    animation="bounce"
                    style={{ fontSize: 30 }} >{counter}</Animatable.Text>

                <TouchableOpacity style={{ borderWidth: 3 }} onPress={() => dispatch({ type: 'INCREAMENT', payload: 1 })}>
                    <Text >Increase</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ borderWidth: 3 }} onPress={() => dispatch({ type: 'DECREAMENT' })}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}

export default Counterdemo;