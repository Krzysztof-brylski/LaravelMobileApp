
import * as React from "react";
import {FlatList, Text, View} from "react-native";
import ScreenTemplate from "../templates/screenTemplate";
import PostComponent from "../components/post/post";
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

    return (
        <ScreenTemplate navigation={navigation}>
           <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={PostComponent}
           />


        </ScreenTemplate>
    );

};
export default HomeScreen;