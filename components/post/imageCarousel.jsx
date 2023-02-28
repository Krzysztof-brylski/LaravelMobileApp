import * as React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";


const ImageCarouselComponent=({photos})=>{
    //todo make slider
    return (
        <View>
            <Image
                source={{uri: 'http://192.168.1.10:8000/storage/'+photos[0].src}}
                style={{width: "100%", height: 600}}
            />
        </View>
    );
};
export default ImageCarouselComponent;