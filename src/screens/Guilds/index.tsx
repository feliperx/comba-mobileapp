import React from "react";
import { View, Text, FlatList } from "react-native";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { ModalView } from "../../components/ModalView";

import { styles } from "./styles";

export function Guilds() {
  const guilds = [
    {
      id: "1",
      name: "Legen.. wf .. dary",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Legen.. wf .. dary",
      icon: null,
      owner: false,
    },
  ];

  return (
    <ModalView>
      <View style={styles.container}>
        <FlatList
          style={styles.guilds}
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Guild data={item} />}
          ItemSeparatorComponent={ListDivider}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ModalView>
  );
}
