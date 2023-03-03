import * as React from "react";
import {View} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const ImageCarouselComponent=({photos})=>{
    //todo make slider
    photos=photos.map((element)=>{
        return "http://192.168.1.10:8000/storage/"+element.src;
    });


    return (
        <View>
            <SliderBox
                images={photos}
                sliderBoxHeight={550}
                //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
            />

        </View>
    );
};
export default ImageCarouselComponent;