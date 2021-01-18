import React from "react";
import {
    View,
    Dimensions,
    StyleSheet,
    StatusBar,
    ImageBackground
} from "react-native";
import * as Animatable from "react-native-animatable";
import {Text} from 'react-native-animatable';

const SplashScreen = () => {
    return (
        <ImageBackground style={styles.container}>
            <StatusBar backgroundColor="#151515" barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounce"
                    duraton="1500"
                    source={require("../assets/img/splash-logo.png")}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <Text style={styles.appName}>Movie App</Text>
            </View>
        </ImageBackground>
    );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const logo = height * 0.24;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff3d3d'
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: logo,
        height: logo
    },
    appName:{
        color : '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
});
