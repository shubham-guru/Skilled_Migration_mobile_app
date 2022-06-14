import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Ionicons";
import Home from './Home';
import Profile from './Profile';
import XAAcademy from './XAAcademy';
import Bookmark from './Bookmark';


const Tab = createBottomTabNavigator();

const Index = () => {
    return (
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon: ({focused, size, color}) =>{
                let iconName;
                if(route.name === "Home"){
                    iconName = "home-sharp";
                    size = focused ? 27 :22
                }
                else if(route.name === "XA Academy"){
                    iconName = "grid-sharp";
                    size = focused ? 27 :22
                }
                else if(route.name === "Bookmark"){
                    iconName = "bookmark-sharp";
                    size = focused ? 27 :22
                }
                else if(route.name === "Profile"){
                    iconName = "ios-person-sharp";
                    size = focused ? 27 :22
                }
                else{}
                return(
                    <Icons 
                        name = {iconName}
                        size = {size}
                        color= {color}
                    />
                )
            }
            })}
            tabBarOptions = {{
                activeTintColor : "#D25930",
                inactiveTintColor: "#222222",
                labelStyle: {
                    fontSize: 13,
                    fontFamily: "JosefinSans-Regular"
                },
                tabBarStyle: [
                    {display: "flex"},null
                ]
            }}
            >
                
            <Tab.Screen 
             options={{header: () => null}}
             name="Home"
             component={Home}
            />
            <Tab.Screen 
             options={{header: () => null}}
             name="XA Academy"
             component={XAAcademy}
            />
            <Tab.Screen 
             options={{header: () => null}}
             name="Bookmark"
             component={Bookmark}
            />
            <Tab.Screen 
             options={{header: () => null}}
             name="Profile"
             component={Profile}
            />
        </Tab.Navigator>
    )
}

export default Index

const styles = StyleSheet.create({})
