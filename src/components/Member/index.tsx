import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Avatar } from "../Avatar";

export type MemberProps = {
  id: string;
  username: string;
  avatarUrl: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const isOnline = data.status === "online";
  const { primary, on } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar imageUrl={data.avatarUrl} />
      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      </View>
    </View>
  );
}
