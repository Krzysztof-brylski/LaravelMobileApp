import * as React from "react";
import {Text, View} from "react-native";
import AxiosFacade from "../facades/Axios";
import {useState,useEffect} from "react";
import CommentComponent from "../components/comments/comment";

const CommentView=({ route, navigation })=> {
    const [commentsData,setCommentsData]=useState([]);
    const id = route.params.id;
    useEffect(()=>{
        AxiosFacade.build().get(`/post/comment/${id}`).then((res)=>{
            //setCommentsData(res.data);
            console.log(res.data);
        });
    },[]);


    return (
        <View>

        </View>
    );

};
export default CommentView;