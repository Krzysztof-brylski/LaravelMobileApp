import * as React from "react";
import {TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCommentDots, faHeart} from "@fortawesome/free-solid-svg-icons";

const PostActionComponent=({id,navigation})=>{
    const comments=()=>{
        navigation.navigate('Comments',{'id':id});
    };


    return (
        <View style={{flexDirection:"row",paddingHorizontal:10,paddingVertical:20}}>
            <FontAwesomeIcon icon={faHeart} size={30} style={{paddingHorizontal:25}} />
            <TouchableOpacity onPress={comments}>
                <FontAwesomeIcon icon={faCommentDots} size={30} style={{paddingHorizontal:25}} />
            </TouchableOpacity>

        </View>
    );
};
export default PostActionComponent;