
import * as React from "react";
import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from "react-native";
import AxiosFacade from "../facades/Axios";
import ScreenTemplate from "../templates/screenTemplate";
import ProfileHeader from "../components/profile/profileHeader";
import NoPosts from "../components/profile/noPosts";
import PostThumbnail from "../components/post/postThumbnali";
import LoadingComponent from "../components/helpers/loading";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBell,faCommentSms,faBellSlash} from "@fortawesome/free-solid-svg-icons";



const ProfileScreen=({navigation, route})=>{

    const [userData,setUserData]=React.useState(null);
    const [reload,setReload]=React.useState(0);
    React.useEffect(()=>{
        AxiosFacade.build().get(`user/info/${route.params.id}`).then((res)=>{
            setUserData(res.data.data);
            //console.log(res.data.data);
        }).catch((err)=>{
           console.error(err);
        });
    },[reload]);

    const follow=()=>{
        AxiosFacade.build().post(`/user/follow/${route.params.id}`).then((res)=>{
            console.log(res.status);
            setReload(reload+1);
        }).catch((err)=>{
            console.error(err);
        });
    };


    return (


            <ScreenTemplate navigation={navigation}>
                {
                    userData === null &&(
                        <LoadingComponent/>
                    )
                }
               { userData !== null &&(
                <View>
                    <View style={style.headerContainer}>
                        <View style={style.profileInfoContainer}>
                            <ProfileHeader
                                image={userData.photo.src}
                                name={userData.name}
                                username={userData.username}
                                description={userData.description}
                            />
                            <View  style={{alignItems:"center"}}>
                                <Text style={style.counterHeader}>Posts</Text>
                                <Text style={style.counterValue}>{userData.postsCount}</Text>
                            </View>

                            <View style={{alignItems:"center"}}>
                                <Text style={style.counterHeader}>Followers</Text>
                                <Text style={style.counterValue}> {userData.followersCount}</Text>
                            </View>

                            <View  style={{alignItems:"center"}}>
                                <Text style={style.counterHeader}>Follows</Text>
                                <Text style={style.counterValue}>{userData.followsCount}</Text>
                            </View>
                        </View>
                        {
                            AxiosFacade.User.id !== userData.id &&(
                                <View style={style.buttonContainer}>
                                    {userData.isFollowed &&(
                                        <TouchableOpacity style={style.button} onPress={follow}>
                                            <Text style={style.buttonText}>Un Follow</Text>
                                            <FontAwesomeIcon icon={faBellSlash} size={20} />
                                        </TouchableOpacity>
                                        )
                                    }
                                    {!userData.isFollowed &&(
                                        <TouchableOpacity style={style.button} onPress={follow}>
                                            <Text style={style.buttonText}>Follow</Text>
                                            <FontAwesomeIcon icon={faBell} size={20} />
                                        </TouchableOpacity>
                                        )
                                    }

                                    <TouchableOpacity style={style.button}>
                                        <Text style={style.buttonText}>Message</Text>
                                        <FontAwesomeIcon icon={faCommentSms} size={20} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
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
                </View>)}
            </ScreenTemplate>



    );
};

const style =  StyleSheet.create({
    counterHeader:{
        fontSize:15,
        fontWeight:"bold",
    },
    counterValue:{
        fontSize:20,
        paddingTop:6,
        fontWeight:"bold",
    },
    counterContainer:{
      margin:10,
    },
    profileInfoContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:"center",
        padding:10,
    },
    button:{
        flexDirection:'row',
        padding: 10,
    },
    buttonText:{
        fontSize:20,
        paddingHorizontal:10,
        fontWeight:"bold"
    },
    headerContainer:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal:15,
        marginBottom:10,
    }


});
export default ProfileScreen;