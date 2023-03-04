
import * as React from "react";
import {Image, Text, View} from "react-native";


const ProfileHeader=({image,name,username})=>{

    return (
        <View style={{paddingHorizontal:20,alignItems:"start", justifyContent:"center"}}>
            <Image
                source={{uri: 'http://192.168.1.10:8000/storage/'+image}}
                style={{width: 100, height: 100,borderRadius:100,border:"transparent"}}
            />
            <View style={{paddingVertical:15}} >
                <Text style={{fontSize:15,fontWeight:"bold"}}>{name} @{username}</Text>

            </View>
        </View>
    );

};
export default ProfileHeader;