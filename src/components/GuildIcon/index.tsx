import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg';
import { theme } from "../../global/styles/theme";

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {
        iconId ? 
        <Image style={styles.image} source={{ uri }} resizeMode="cover" />
        : 
        <DiscordSvg width={40} height={40}/>
      }
    </View>
  );
}
