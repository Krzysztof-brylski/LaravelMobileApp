
import * as React from "react";
import {StyleSheet, Text, View,FlatList} from "react-native";
import SearchScreen from "./serach";
import NavBar from "../components/navBar";
import AxiosFacade from "../facades/Axios";
import ScreenTemplate from "../templates/screenTemplate";
import ProfileHeader from "../components/profile/profileHeader";
import NoPosts from "../components/profile/noPosts";
import PostComponent from "../components/post/post";
import PostThumbnail from "../components/post/postThumbnali";


const ProfileScreen=({navigation, route})=>{

    const [userData,setUserData]=React.useState(null);

    React.useEffect(()=>{
        AxiosFacade.build().get(`user/info/${route.params.id}`).then((res)=>{
            setUserData(res.data.data);
            console.log(res.data.data);
        }).catch((err)=>{
           console.log(err);
        });
    },[]);
    return (

            userData !== null &&
            <ScreenTemplate navigation={navigation}>
                <View style={style.headerContainer}>
                    <ProfileHeader
                        image={userData.photo.src}
                        name={userData.name}
                        username={userData.username}
                    />
                    <View>
                        <Text style={style.counterHeader}>followers</Text>
                        <Text style={style.counterValue}> {userData.followersCount}</Text>
                    </View>

                    <View>
                        <Text style={style.counterHeader}>follows</Text>
                        <Text style={style.counterValue}>{userData.followsCount}</Text>
                    </View>
                </View>
                {
                    userData.posts.length ===0 && (
                        <NoPosts/>
                    )
                }
                {
                    userData.posts.length !==0 && (
                        <FlatList
                            numColumns={3}
                            data={userData.posts}
                            keyExtractor={item => item.id}
                            renderItem={({item})=><PostThumbnail post={item} />}
                        />
                    )
                }

            </ScreenTemplate>



    );
};

const style =  StyleSheet.create({
    counterHeader:{
        fontSize:15,
        fontWeight:"bold",
    },
    counterValue:{
        fontSize:15,
        fontWeight:"bold",
    },
    counterContainer:{
      margin:10,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal:15,
        marginBottom:10,
    }


});
export default ProfileScreen;