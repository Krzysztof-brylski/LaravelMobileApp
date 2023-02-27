
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/serach";
import AddScreen from "./screens/add";
import ProfileScreen from "./screens/profile";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
     <NavigationContainer >
         <Stack.Navigator>
             <Stack.Screen
                 hideNavigationBar={true}
                 name="Home"
                 component={HomeScreen}
                 options={() => ({
                     headerShown:false,
                 })}
             />
             <Stack.Screen
                 name="Search"
                 component={SearchScreen}
                 options={() => ({
                     headerShown:false,
                 })}

             />
             <Stack.Screen
                 name="Add"
                 component={AddScreen}
                 options={() => ({
                     headerShown:false,
                 })}

             />
             <Stack.Screen
                 name="Profile"
                 component={ProfileScreen}
                 options={() => ({
                     headerShown:false,
                 })}

             />
         </Stack.Navigator>
     </NavigationContainer>
  );
}
