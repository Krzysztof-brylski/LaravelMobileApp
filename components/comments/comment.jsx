import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View,Button} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import CommentAuthor from "./commentAuthor";
import AxiosFacade from "../../facades/Axios";


const CommentComponent=({item, navigation })=>{

    const [liked,setLiked]=React.useState(item.liked);
    const [likes,setLikes]=React.useState(item.likesCount);
    const viewProfile=()=>{
        navigation.navigate('Profile',{'id':item.author.id});
    };
    const like=()=>{

        AxiosFacade.build().post(`/comment/like/${item.id}`).then((res)=>{

            if(!liked){
                setLikes(likes+1);
                setLiked(true);
            }else{

                setLikes(likes-1);
                setLiked(false);
            }

        }).catch((err)=>{
            console.error(err);
        });
    };

    return (
        <View style={style.commentContainer}>
            <View style={style.authorContainer}>
                <TouchableOpacity onPress={viewProfile}>
                    <CommentAuthor
                        image={item.author.photo}
                        name={item.author.name}
                        username={item.author.username}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={like}>
                    <FontAwesomeIcon icon={faHeart} size={25} style={[style.btn, liked ?style.likedBtn:null ]}/>
                </TouchableOpacity>
            </View>
            <View style={style.contentContainer}>
                <Text>
                    {item.content}
                </Text>
            </View>
            <View style={{flexDirection:"row",marginVertical:10}}>
                <Text  style={style.subtitles}> Likes: {likes}</Text>
                <Text  style={style.subtitles}> Answer</Text>
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
    },
    subtitles:{
        color:"gray",
        fontSize:15,
        fontWeight:"bold",
        paddingHorizontal:15
    },
    btn:{
        paddingHorizontal: 25,
    },
    likedBtn:{
        color:"red",
    }
});


export default CommentComponent;