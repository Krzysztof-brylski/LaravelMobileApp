import * as React from "react";
import {StyleSheet, Text, View} from "react-native";

import ScreenTemplate from "../templates/screenTemplate";
import MessageThumbnail from "../components/messages/messageThumbnail";


const MessagesScreen=({navigation})=>{

    return (
        <ScreenTemplate navigation={navigation}>
            <Text style={style.messages}>Messages:</Text>
            <MessageThumbnail navigation={navigation}/>
            <MessageThumbnail navigation={navigation}/>
            <MessageThumbnail navigation={navigation}/>
            <MessageThumbnail navigation={navigation}/>
        </ScreenTemplate>
    );

};
const style =  StyleSheet.create({
    messages:{
        fontSize:20,
        fontWeight:"bold",
        padding:20,

    },
});
export default MessagesScreen;