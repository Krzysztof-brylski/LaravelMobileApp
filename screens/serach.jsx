
import * as React from "react";
import {Text, View} from "react-native";
import ScreenTemplate from "../templates/screenTemplate";


const SearchScreen=({navigation})=>{
    return (

        <ScreenTemplate navigation={navigation}>
            <View>
                <Text>Search</Text>
            </View>
        </ScreenTemplate>
    );

};
export default SearchScreen;