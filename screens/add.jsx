
import * as React from "react";
import {Text, View} from "react-native";
import SearchScreen from "./serach";
import NavBar from "../components/navBar";
import ScreenTemplate from "../templates/screenTemplate";


const AddScreen=({navigation})=>{

    return (
        <ScreenTemplate navigation={navigation}>
            <View >
                <Text>Add </Text>
            </View>
        </ScreenTemplate>
    );

};
export default AddScreen;