
import * as React from "react";
import  { useEffect, useState} from "react";
import {FlatList, Text, View} from "react-native";
import ScreenTemplate from "../templates/screenTemplate";
import PostComponent from "../components/post/post";
import AxiosFacade from "../facades/Axios";
const DATA=[
    {title:"title",author:"mike",content:"content",image:"image",id:1},
    {title:"title",author:"mike",content:"content",image:"image",id:2},
    {title:"title",author:"mike",content:"content",image:"image",id:3},
    {title:"title",author:"mike",content:"content",image:"image",id:4},
    {title:"title",author:"mike",content:"content",image:"image",id:5},
    {title:"title",author:"mike",content:"content",image:"image",id:6},
    {title:"title",author:"mike",content:"content",image:"image",id:7},
];

const HomeScreen=({navigation})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{

        AxiosFacade.build().get('/user/suggested/posts',).then((res)=>{
            setData(res.data.data);
        }).catch((err)=>{
            console.error(err.message);
        });
    },[]);

    return (
        <ScreenTemplate navigation={navigation}>
           <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={PostComponent}
           />


        </ScreenTemplate>
    );

};
export default HomeScreen;