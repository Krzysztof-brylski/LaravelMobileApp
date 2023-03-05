import * as React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import AxiosFacade from "../../facades/Axios";
import AuthorComponent from "./author";
import ImageCarouselComponent from "./imageCarousel";
import PostActionComponent from "./postAction";
import PostContentComponent from "./postContent";

const PostComponent=({item, navigation})=>{

    const viewProfile=()=>{
        navigation.navigate('Profile',{'id':item.author.id});
    };

    return (
        <View style={style.postContainer}>
            <TouchableOpacity onPress={viewProfile} >
                <AuthorComponent
                    image={item.author.photo}
                    name={item.author.name}
                    username={item.author.username}
                />
            </TouchableOpacity>
            <ImageCarouselComponent photos={item.photos}/>
            <PostActionComponent id={item.id} navigation={navigation}/>
            <PostContentComponent title={item.title} content={item.content} likes_count={item.likes_count}/>
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