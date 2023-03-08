import AuthorComponent from "../post/author";
import {View,TouchableOpacity} from "react-native";
import React from "react";

const SearchingResult=({item, navigation})=>{

  const viewProfile=()=>{
    navigation.push('Profile',{'id':item.id});
  };

  return(
      <View style={{margin:10}}>
          <TouchableOpacity onPress={viewProfile}>
            <AuthorComponent image={item.photo} username={item.username} name={item.name} />
          </TouchableOpacity>
      </View>
  );
};
export default SearchingResult;