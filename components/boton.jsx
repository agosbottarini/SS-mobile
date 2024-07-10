import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({nombre, onPress}) => {
    return(
        
        <TouchableOpacity>
            <Text style={StyleSheet.text}>{nombre}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: "#169187",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            marginTop: "2vw",
        },

        text: {
            color: "ffffff",
            fontSize: 16,
            fontWeight: "bold",
        }
    }
)