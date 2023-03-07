
import * as React from "react";
import {Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import SearchScreen from "./serach";
import NavBar from "../components/navBar";
import ScreenTemplate from "../templates/screenTemplate";
import PostThumbnail from "../components/post/postThumbnali";
import LoadingComponent from "../components/helpers/loading";
import Message from "../components/messages/message";
import AxiosFacade from "../facades/Axios";
import KeyboardStickyView from "rn-keyboard-sticky-view";


const MessageWithUserScreen=({navigation,route})=>{

    const [reload,setReload]=React.useState(0);
    const [chatData,setChatData]=React.useState(null);
    React.useEffect(()=>{
        //todo load chat with specified user
        setChatData([
            {content:"elooooo",id:1,author_id:1,},
            {content:"elooooo",id:2,author_id:3,},
            {content:"elooooo",id:3,author_id:1,},
            {content:"elooooo",id:4,author_id:3,},
            {content:"elooooo",id:5,author_id:1,},
            {content:"elooooo",id:6,author_id:3,},
            {content:"elooooo",id:7,author_id:3,},
            {content:"elooooo",id:8,author_id:1,},
            {content:"elooooo",id:9,author_id:3,},

        ]);
    },[reload]);


    return (
        <View style={{height:"100%"}}>
            <View  style={{height:"90%"}}>

                {
                    chatData === null&&(
                        <LoadingComponent/>
                    )

                }
                {
                    chatData !== null &&(
                        <FlatList
                            style={{padding:15}}
                            data={chatData}
                            //keyExtractor={item => item.id}
                            renderItem={({item})=><Message content={item.content} self={item.author_id === AxiosFacade.User.id} />}
                        />
                    )
                }
                <ScrollView style={{padding:15}}>

                </ScrollView>
            </View>

            <KeyboardStickyView   style={style.commentFormContainer}>
                <View  style={style.formContainer}>

                    <TextInput
                        style={{width: "80%"}}
                        placeholder={"Add comment..."}

                    />
                    <Button
                        title="Send"
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
        width:"100%",

        borderWidth:1,
        borderColor:"gray",
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical:5,
        flexDirection: "row",
        justifyContent: "space-between"
    }

});

export default MessageWithUserScreen;