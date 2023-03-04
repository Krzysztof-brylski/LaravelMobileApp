
import * as React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHome, faMagnifyingGlass, faPlus, faUser} from "@fortawesome/free-solid-svg-icons";
import AxiosFacade from "../facades/Axios";



const NavBar=({navigation})=>{

    const handleNavigation=(path,id=null)=>{
        navigation.navigate(path,id);
    };

    return (
        <View style={style.menuContainer}>
            <TouchableOpacity
                onPress={()=>{handleNavigation('Home')}}
            >
                <FontAwesomeIcon icon={faHome} size={25} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{handleNavigation('Search')}}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} size={25} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{handleNavigation('Add')}}
            >
                <FontAwesomeIcon icon={faPlus} size={25} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{handleNavigation('Profile',{'id':AxiosFacade.User.id})}}
            >

                <FontAwesomeIcon icon={faUser} size={25} />
            </TouchableOpacity>
        </View>
    );

};
const style =  StyleSheet.create({
    menuContainer:{
        paddingHorizontal:35,
        paddingTop:10,
        paddingBottom:15,
        flexDirection:"row",
        //alignItems:"center",
        height:80,
        justifyContent:"space-between"
    }

});

export default NavBar;