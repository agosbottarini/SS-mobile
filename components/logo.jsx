import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import logoImage from './../assets/image/LOGO.png';

const Logo = () =>{
    return(
       <View>
            <Image source={logoImage} style={StyleSheet.logo}/>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        container:{
            alignItems: "center",
            justifyContent: "center",
        },
        logo:{
            width: "5%",
            height: "5%",
            resizeMode: "contain"
        }
    });

    export default Logo;