import * as React from "react";
import {Image, SafeAreaView, StyleSheet, TouchableOpacity, View} from "react-native";
import NavBar from "../components/navBar";
import {faCommentSms} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";


const ScreenTemplate=({navigation,children})=>{

    const navigateToMessages=()=>{
      navigation.navigate('Messages');
    };

    return (
        <SafeAreaView >
            <View style={style.headerContainer}>
                <Image source={require('../assets/logo.png')}/>
                <TouchableOpacity onPress={navigateToMessages}>
                    <FontAwesomeIcon icon={faCommentSms} size={25} />
                </TouchableOpacity>
            </View>
            <View style={style.contentContainer}>
                {children}
            </View>
            <View style={style.menuContainer} >
                <NavBar navigation={navigation}/>
            </View>
        </SafeAreaView >
    );
};

const style =  StyleSheet.create({
    menuContainer:{
        height:"auto",
        backgroundColor:"#fff",
        paddingVertical:2,
    },
    headerContainer:{
        height:"auto",
        paddingHorizontal:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    contentContainer:{
        height:"87%",
    }
});

export default ScreenTemplate;