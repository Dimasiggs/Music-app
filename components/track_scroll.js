import React, { createContext, useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, Text} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

//const ElementCoordinatesContext = createContext(null);

const Track = ({color, title}) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <TouchableOpacity>
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};
const x = 10;
const styles = StyleSheet.create({
    container: {
        width: width-x*2,
        height: 70,
        padding: 20,
        marginVertical: 5,
        marginHorizontal: x,
        
    }
})

export default Track;

