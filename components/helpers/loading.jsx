import {ActivityIndicator, View} from "react-native";
import React from "react";

const LoadingComponent=()=>{
    return (
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size="large"/>
        </View>
    );
};
export default LoadingComponent;