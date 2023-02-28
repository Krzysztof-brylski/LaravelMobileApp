import * as React from "react";
import {Image, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const CommentComponent=({author,content,likes_count})=>{


    return (
        <View>
            <View style={{flexDirection: "row", alignItems: "space-between"}}>
                <CommentAuthor
                    image={author.photo}
                    name={author.name}
                    username={author.username}
                />
                <FontAwesomeIcon icon={faHeart} size={25} style={{paddingHorizontal: 25}}/>
            </View>
            <View>
                <Text>
                    {content}
                </Text>
            </View>
        </View>
    );
};
export default CommentComponent;