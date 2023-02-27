import * as React from "react";
import {SafeAreaView, StyleSheet,View} from "react-native";
import NavBar from "../components/navBar";


const ScreenTemplate=({navigation,children})=>{

    return (
        <SafeAreaView >
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
    },
    contentContainer:{
        height:"92%",
    }
});

export default ScreenTemplate;