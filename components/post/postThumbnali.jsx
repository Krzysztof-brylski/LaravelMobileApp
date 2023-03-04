import * as React from "react";
import {StyleSheet, Text, View, FlatList, Image} from "react-native";

const PostThumbnail=({post})=>{

    return(
        <Image
            source={{uri: 'http://192.168.1.10:8000/storage/'+post.photos[0].src}}
            style={{width: 135, height: 135,margin:1}}
        />
    );

};

export default PostThumbnail;