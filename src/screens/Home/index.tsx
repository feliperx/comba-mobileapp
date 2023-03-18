import React, { useState } from "react";
import { Text, View, TextInput, Image, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import IllustrationImage from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";

export function Home() {

    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}> 

             <Avatar imageUrl="https://github.com/feliperx.png"/>  
             <Profile/>
             <ButtonAdd/>

            </View>
            <View>
                <CategoryList
                    categorySelected={category} 
                    setCategory={handleCategorySelect}

                />
            </View>
        </View>
    );
    
}