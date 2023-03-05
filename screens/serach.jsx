
import * as React from "react";
import {Button, StyleSheet, FlatList, TextInput, View} from "react-native";
import ScreenTemplate from "../templates/screenTemplate";
import AxiosFacade from "../facades/Axios";
import SearchingResult from "../components/searching/searchingResult";
import LoadingComponent from "../components/helpers/loading";


const SearchScreen=({navigation})=>{

    const [searching,setSearching]=React.useState(false);
    const [searchValue,setSearchValue]=React.useState("");
    const [searchingResult,setSearchingResult]=React.useState(null);
    const searchInput=React.useRef(null);
    const cancelFocus=()=>{
        searchInput.current.blur();
        setSearchValue("");
    };

    const handleSearchRequest=()=>{
        AxiosFacade.build().get("/search",{params:{name:searchValue}}).then((res)=>{
            setSearchingResult(res.data.data);
        });
    };
    const handleFocus=()=>{
        setSearchValue("");
        setSearching(true);
    };

    const  handleChangeText=(param)=>{
        setSearchValue(param);
        handleSearchRequest();
    };


    return (

        <ScreenTemplate navigation={navigation}>
            <View style={[style.searchContainer, searching? style.searchContainerUnderLine:null]}>
                <View  style={style.formContainer}>
                    <TextInput
                        ref={searchInput}
                        onFocus={handleFocus}
                        onBlur={() => setSearching(false)}
                        onChangeText={handleChangeText}
                        style={{width: "80%"}}
                        placeholder={"Search ..."}
                    />
                </View>
                {
                    searching &&
                    <Button
                        visible={!searching}
                        onPress={cancelFocus}
                        title="Cancel"
                    />

                }
            </View>
            {
                searchingResult === null &&(
                    <LoadingComponent/>
                )
            }

            {
                searchingResult !== null &&(

                    <FlatList
                        data={searchingResult}
                        keyExtractor={item => item.id}
                        renderItem={({item})=>(<SearchingResult item={item} navigation={navigation}/> )}
                    />
                )
            }

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