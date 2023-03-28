import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

type Props = {

};


export function GuildIcon({}: Props) {

  const uri = 'https://www.esports.net/br/wp-content/uploads/sites/3/2022/11/muerta-personagem-dota-2.jpg'

  return (
    <Image 
      style={styles.image}
      source={{uri}}
      resizeMode='cover'
    />
    
  );
}
