import React, { useState } from "react";
import { Text, View, TextInput, Image, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import IllustrationImage from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Profile } from "../../components/Profile";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
               
             <Profile/>

            </View>
        </View>
    );
    
}