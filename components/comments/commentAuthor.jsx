import * as React from "react";
import {Image, Text, View} from "react-native";


const CommentAuthor=({image,name,username})=>{
    return (
        <View style={{flexDirection:"row",paddingHorizontal:20,alignItems:"center"}}>
            <Image
                source={{uri: 'http://192.168.1.10:8000/storage/'+image}}
                style={{width: 35, height: 35,borderRadius:100,border:"transparent"}}
            />
            <View style={{paddingHorizontal:30}}>
                <Text>{name}</Text>
                <Text>{username}</Text>
            </View>
        </View>
    );

};
export default CommentAuthor;