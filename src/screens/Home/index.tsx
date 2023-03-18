import React, { useState } from "react";
import { Text, View, TextInput, Image, StatusBar, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";

export function Home() {

    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Legen.. wf ..dary', 
                icon: null,
                owner: true
            },
            category: '1', 
            date: '26/04 as 20h40', 
            description: 'Dia de ganhar mais xp'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Legen.. wf ..dary', 
                icon: null,
                owner: true
            },
            category: '1', 
            date: '26/04 as 20h40', 
            description: 'Dia de ganhar mais xp'
        }
    ]

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
            <View style={styles.content}>
                <ListHeader 
                title='Partidas agendadas' 
                subtitle='Total 7'
                />
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem= {({item}) => (
                        <Appointment data={item}/>
                    )}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
    
}