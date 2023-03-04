import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";


const NoPosts=()=>{

    return(
        <View style={{flexDirection:"column",justifyContent:"center", alignItems:"center",height:550}}>
            <FontAwesomeIcon icon={faEyeSlash} size={250} />
            <Text style={{fontSize:40,fontWeight:"bold"}}> Ups ... </Text>
            <Text style={{fontSize:25,paddingTop:15}}> User has not added any pots</Text>
        </View>
    );


};
export default NoPosts;