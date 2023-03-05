import * as React from "react";
import {Text, View, FlatList, TextInput, Button, StyleSheet, Image} from "react-native";
import KeyboardStickyView from 'rn-keyboard-sticky-view';
import AxiosFacade from "../facades/Axios";
import {useState,useEffect} from "react";
import CommentComponent from "../components/comments/comment";
import PostComponent from "../components/post/post";
import LoadingComponent from "../components/helpers/loading";
import ScreenTemplate from "../templates/screenTemplate";

const CommentView=({ route, navigation })=> {

    const [commentsData,setCommentsData]=useState(null);
    const [comment,setComment]=useState("");
    const [reload,setReload]=useState(false);
    const postId = route.params.id;



    useEffect(()=>{
        AxiosFacade.build().get(`/post/comment/${postId}`).then((res)=>{
            setCommentsData(res.data.data);
        });
    },[reload]);

    const sendComment=()=>{
        AxiosFacade.build().post(`/post/comment/${postId}`,{content:comment}).then((res)=>{
            setReload(true);
            setComment("");
        });
    };


    return (
        <View style={{height:"100%"}}>

            {
                commentsData === null &&(
                    <LoadingComponent/>
                )
            }


            <View style={style.commentListContainer}>
                {
                    commentsData !== null &&(
                        <FlatList
                            data={commentsData}
                            keyExtractor={item => item.id}
                            renderItem={({item})=><CommentComponent item={item} navigation = {navigation} />}

                        />
                    )
                }

            </View>
            <KeyboardStickyView  style={style.commentFormContainer}>
                <Image
                    source={{uri: 'http://192.168.1.10:8000/storage/'+AxiosFacade.User.photo}}
                    style={{width: 55, height: 55,borderRadius:100,border:"transparent",marginRight:15}}
                />
                <View  style={style.formContainer}>

                    <TextInput
                        style={{width: "80%"}}
                        placeholder={"Add comment..."}
                        onChangeText={setComment}
                    />
                    <Button
                        disabled={comment.length === 0}
                        title="Send"
                        onPress={sendComment}
                    />
                </View>

            </KeyboardStickyView >
        </View>
    );

};
const style =  StyleSheet.create({
    commentListContainer:{
        height:"90%"
    },
    commentFormContainer:{

        flexDirection: "row",
        marginVertical:25,
        paddingHorizontal:25,
        paddingVertical:15,
        alignItems:"center",
        backgroundColor:"#fff",

    },
    formContainer:{
        width:"80%",

        borderWidth:1,
        borderColor:"gray",
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical:5,
        flexDirection: "row",
        justifyContent: "space-between"
    }

});


export default CommentView;