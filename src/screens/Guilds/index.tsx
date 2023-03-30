import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);

  

  return (
      <View style={styles.container}>
        <FlatList
          style={styles.guilds}
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}  
          />
          
          )}
          ItemSeparatorComponent={() => <ListDivider isCenter/>}
          ListHeaderComponent={() => <ListDivider isCenter/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 60, marginTop: 103}}
        />
      </View>
  );
}
