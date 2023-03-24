import React from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";



export function Guilds() {

  const guilds = [{
    id: '1', 
    name: 'Legen.. wf .. dary',
    icon: null,
    owner: true  
    
  }]

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View/>
        )}
      
      />
    </View>
  );
}
