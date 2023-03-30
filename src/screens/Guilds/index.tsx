import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

import { styles } from "./styles";


type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds(){
    const userGuildsInfo = await api.get("/users/@me/guilds");

    setGuilds(userGuildsInfo.data);

    setLoading(false);
  }
  
  useEffect(() => {
    fetchGuilds();
  },[])

  return (
    <View style={styles.container}>
      {
      loading ? (
        <Load />
      ) : (
        <FlatList
          style={styles.guilds}
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider isCenter />}
          ListHeaderComponent={() => <ListDivider isCenter />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60, marginTop: 103 }}
        />
      )}
    </View>
  );
}
