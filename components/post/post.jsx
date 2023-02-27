import * as React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import AxiosFacade from "../../facades/Axios";
import AuthorComponent from "./author";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart,faCommentDots} from "@fortawesome/free-solid-svg-icons";

const PostComponent=({item})=>{
    console.log('192.168.1.10:8000/storage/'+item.author.photo);
    return (
        <View style={style.postContainer}>
            <AuthorComponent
                image={item.author.photo}
                name={item.author.name}
                username={item.author.username}
            />
            <View>
                <Image
                    source={{uri: 'http://192.168.1.10:8000/storage/'+item.photos[0].src}}
                    style={{width: "100%", height: 600}}
                />
            </View>
            <View style={{flexDirection:"row",paddingHorizontal:10,paddingVertical:20}}>
                <FontAwesomeIcon icon={faHeart} size={30} style={{paddingHorizontal:25}} />
                <FontAwesomeIcon icon={faCommentDots} size={30} style={{paddingHorizontal:25}} />
            </View>
            <View>
                <Text style={{fontWeight:"bold"}}>Like count: {item.likes_count}</Text>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
            </View>
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