import * as React from "react";
import {Text, View} from "react-native";


const PostContentComponent=({title,content})=>{


    return(
        <View style={{paddingHorizontal:15,}}>
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>
    );
};
export default PostContentComponent;