import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  imageUrl: string;
};


export function Avatar({imageUrl}: Props) {

  const {secondary80, secondary100} = theme.colors;

  return (
    <LinearGradient
    style={styles.container}
    colors={[secondary80, secondary100]}
>
    <Image
      source={{uri: imageUrl}} 
      style={styles.avatar}
    />
</LinearGradient>
  );
}
