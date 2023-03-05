import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCommentDots, faHeart} from "@fortawesome/free-solid-svg-icons";
import AxiosFacade from "../../facades/Axios";

const PostActionComponent=({id,navigation,likes_count,likeStatus})=>{
    const [likes,setLikes]=React.useState(likes_count);
    const  [liked,setLiked]=React.useState(likeStatus);
    const comments=()=>{
        navigation.navigate('Comments',{'id':id});
    };
    const like=()=>{
        AxiosFacade.build().post(`/post/like/${id}`).then((res)=>{

            if(!liked){
                setLikes(likes+1);
                setLiked(true);
            }else{

                setLikes(likes-1);
                setLiked(false);
            }

        }).catch((err)=>{
            //console.log('disliked');
        });

    };

    return (
        <View style={{flexDirection:"column",paddingHorizontal:10,paddingVertical:20}}>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={like}>
                    <FontAwesomeIcon icon={faHeart} size={30} style={[style.btn, liked ?style.likedBtn:null ]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={comments}>
                    <FontAwesomeIcon icon={faCommentDots} size={30} style={{paddingHorizontal:25}} />
                </TouchableOpacity>
            </View>
            <Text style={{fontWeight:"bold",padding:10}}>Like count: {likes}</Text>

        </View>
    );
};
const style =  StyleSheet.create({
    btn:{
        paddingHorizontal:25
    },

    likedBtn:{
        color:"red",
    }
});

export default PostActionComponent;