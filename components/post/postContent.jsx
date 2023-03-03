import * as React from "react";
import {Text, View} from "react-native";


const PostContentComponent=({title,content,likes_count})=>{


    return(
        <View style={{paddingHorizontal:15,}}>
            <Text style={{fontWeight:"bold"}}>Like count: {likes_count}</Text>
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>
    );
};
export default PostContentComponent;