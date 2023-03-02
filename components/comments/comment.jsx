import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import CommentAuthor from "./commentAuthor";


const CommentComponent=({item})=>{


    return (
        <View style={style.commentContainer}>
            <View style={style.authorContainer}>
                <CommentAuthor
                    image={item.author.photo}
                    name={item.author.name}
                    username={item.author.username}
                />
                <FontAwesomeIcon icon={faHeart} size={25} style={{paddingHorizontal: 25}}/>
            </View>
            <View style={style.contentContainer}>
                <Text>
                    {item.content}
                </Text>
            </View>
        </View>
    );
};
const style =  StyleSheet.create({
    commentContainer:{
        width:"100%",
        marginVertical:25,
        paddingHorizontal:5,
    },
    authorContainer:{
        flexDirection: "row",
        marginVertical:5,
        justifyContent: "space-between",
    },
    contentContainer:{
        marginHorizontal:25,
    }
});


export default CommentComponent;