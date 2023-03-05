
import * as React from "react";
import  { useEffect, useState} from "react";
import {FlatList} from "react-native";
import ScreenTemplate from "../templates/screenTemplate";
import PostComponent from "../components/post/post";
import AxiosFacade from "../facades/Axios";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoadingComponent from "../components/helpers/loading";


const HomeScreen=({navigation})=>{




    const Stack = createNativeStackNavigator();
    const [data,setData]=useState(null);

    useEffect(()=>{

        AxiosFacade.build().get('/user/suggested/posts',).then((res)=>{
            setData(res.data.data);
        }).catch((err)=>{
            console.error(err.message);
        });
    },[]);

    return (

        <ScreenTemplate navigation={navigation}>
            {
                data == null &&(
                    <LoadingComponent/>
                )
            }

            {
                data !== null &&(
                   <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(<PostComponent item={item} navigation={navigation}/>)}
                   />
                )
           }
        </ScreenTemplate>
    );

};
export default HomeScreen;