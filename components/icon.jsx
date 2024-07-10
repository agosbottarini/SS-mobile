import { Image, StyleSheet } from "react-native";

export const Icon = ({imagen, route}) =>{
    return(
        <Image source={require(imagen)} onPress={()=>navigation.navigate(route)} style={styles.icon}/>
    );
}

const styles = StyleSheet.create({
    icon:{
        height: 25,
        width: 25
    }
})