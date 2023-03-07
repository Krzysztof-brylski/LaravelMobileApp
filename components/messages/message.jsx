
import * as React from "react";
import {StyleSheet, Text, View} from "react-native";



const Message=({content,self})=>{

    return (
        <View style={[style.messageContainer, self? style.messageContainerSelf : style.messageContainerForeign ]}>
            <View style={[style.message, self? style.messageSelf : null]}>
                <Text style={[self? style.messageTextSelf : style.messageTextForeign ]}>{content}</Text>
            </View>
        </View>
    );
};

const style =  StyleSheet.create({

    messageContainer:{
        width:"100%",
        flexDirection:"row",
        flex:1,
        marginVertical:15,
    },
    messageContainerSelf: {

        justifyContent:"flex-end"
    },
    messageContainerForeign:{
        justifyContent:"flex-start"
    },

    message:{
        padding: 15,
        borderWidth: 1,
        borderRadius:15,
        width:"50%",
        borderColor:"lightgrey",
    },
    messageSelf:{
        backgroundColor:"lightgrey",

    },
    messageTextSelf: {
        textAlign:"right",

    },
    messageTextForeign:{
        textAlign:"left",
    },
});
export default Message;