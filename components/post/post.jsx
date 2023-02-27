import * as React from "react";
import {StyleSheet, Text, View} from "react-native";


const PostComponent=({item})=>{
    return (
        <View style={style.postContainer}>
            <Text>{item.title}</Text>
            <Text>{item.image}</Text>
            <Text>{item.author}</Text>
            <Text>item.control</Text>
            <Text>{item.content}</Text>
        </View>
    );

};

const style =  StyleSheet.create({
    postContainer:{
        height:800,
        marginVertical:20,
        backgroundColor:"transparent",
    },

});

export default PostComponent;