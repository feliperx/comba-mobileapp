import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
  noIconSelected?: boolean;
}


export function Guild({data, ...rest}: Props) {
  return (
    <TouchableOpacity
    style={styles.container}
    activeOpacity={0.75}
    {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon}/> 
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>
          <Text style={styles.type}>
            { data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
        
      </View>
      <Feather 
        name={'chevron-right'}
        size={24}
        color={theme.colors.heading}
      />

    </TouchableOpacity>
  );
}
