
import * as React from "react";
import {Button, StyleSheet, FlatList, TextInput, View} from "react-native";
import ScreenTemplate from "../templates/screenTemplate";
import KeyboardStickyView from "rn-keyboard-sticky-view";


const SearchScreen=({navigation})=>{

    const [searching,setSearching]=React.useState(false);
    const onFocus=()=>{
        console.log('focus')
    };

    return (

        <ScreenTemplate navigation={navigation}>
            <View style={[style.searchContainer, searching? style.searchContainerUnderLine:null]}>
                <View  style={style.formContainer}>

                    <TextInput
                        onFocus={() =>setSearching(true)}
                        onBlur={() => setSearching(false)}
                        style={{width: "80%"}}
                        placeholder={"Search ..."}
                    />
                </View>
                {
                    searching &&
                    <Button
                        visible={!searching}
                        title="Cancel"
                    />

                }
            </View>
            <FlatList/>
        </ScreenTemplate>
    );

};

const style =  StyleSheet.create({
    formContainer:{
        borderWidth:2,
        borderColor:"gray",
        borderRadius:15,
        marginVertical:20,
        width:"100%",
        height:45,
        paddingLeft:10,
        flexDirection: "row",
        justifyContent: "space-between",
        flex:1,
    },
    searchContainerUnderLine:{
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      marginBottom:10,
    },
    searchContainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:15,
    }


});

export default SearchScreen;