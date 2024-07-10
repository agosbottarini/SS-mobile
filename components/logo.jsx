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