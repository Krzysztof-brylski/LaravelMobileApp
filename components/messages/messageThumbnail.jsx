import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";


const MessageThumbnail=({navigation})=>{

    const openMessages=()=>{
        navigation.navigate('MessageWithUserScreen');
    };

    return (
        <TouchableOpacity onPress={openMessages}>
            <View style={style.container}>
                <Image style={style.image}  source={{uri: 'http://192.168.1.10:8000/storage/Photos/default.png'}}/>
                <View style={style.userDataContainer}>
                    <Text style={style.name}>Name Surname</Text>
                    <Text style={style.userName}>@userName</Text>
                </View>
                <View style={style.newMessagesContainer}>
                <Text style={style.newMessages}>(1)</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

};
const style =  StyleSheet.create({
    container:{
        marginVertical:15,
        flexDirection:"row",
        padding:15,

    },
    image:{
        height:75,
        width:75,
        padding:5,
        borderRadius:100,
        border:"transparent",
    },
    userDataContainer:{
        paddingHorizontal:20,
        flexDirection:"column",
        justifyContent:"center"
    },
    name:{
        fontSize:16,
        fontWeight:"bold",
    },
    newMessages:{
        fontSize:20,
        fontWeight:"bold",

    },
    newMessagesContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"end",
        marginHorizontal:90,
    },
    userName:{
        fontSize:16,
    },
});

export default MessageThumbnail;