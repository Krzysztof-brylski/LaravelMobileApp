
import * as React from "react";
import {Text, View, SafeAreaView, Button, TextInput, StyleSheet,Image} from "react-native";
import AxiosFacade from "../../facades/Axios";
import {useState} from "react";
const LoginComponent=({auth,setAuth})=>{
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

    const login=()=>{
        AxiosFacade.build().post("/login/",{
            'email':name,
            'password':password,
        }).then((res)=>{
            AxiosFacade.Auth(res.data.token,res.data.user);
            setAuth(AxiosFacade.isAuth());
        }).catch((err)=>{
            console.error(err);
            console.error(err.message);
        });

    };
    return (
        <SafeAreaView style={style.container}>
            <View style={style.card}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{width: 220, height: 80,marginBottom:35,}}
                />
                <TextInput
                    onChangeText={setName}
                    style={style.input}
                    placeholder="Email" />
                <TextInput
                    style={style.input}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Password"
                />

                <Button
                    title="login"
                    onPress={login}
                />
            </View>

            <View style={style.card}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text>
                        Dont have an account
                    </Text>
                    <Button
                        style={style.button}
                        title="Sign in"
                        onPress={login}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const style =  StyleSheet.create({
    container:{
        height:"100%",
        paddingVertical:45,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "rgb(250, 250, 250)",
    },
    card:{
        width:"75%",
        paddingVertical:25,
        marginVertical:25,
        justifyContent:"start",
        alignItems:"center",
        backgroundColor: "#fff",
    },
    header:{
        color:"blue",
        fontSize:45,
        fontWeight:"bold",
        marginVertical:25,
    },
    input:{
        margin:10,
        padding:10,
        width:"80%",
        backgroundColor: "rgb(250, 250, 250)",
        borderWidth:1,
        borderColor:"#000",
        borderRadius:5,
    },
    button:{
        margin:10,
        padding:10,
        width:"80%",
        fontSize:45,
        backgroundColor: "#0095f6",
    }
});
export default LoginComponent;