
import * as React from "react";
import {Text, View} from "react-native";
import SearchScreen from "./serach";
import NavBar from "../components/navBar";
import ScreenTemplate from "../templates/screenTemplate";


const ProfileScreen=({navigation})=>{

    return (
        <ScreenTemplate navigation={navigation}>
            <View >
                <Text>profile </Text>
            </View>
        </ScreenTemplate>
    );

};
export default ProfileScreen;