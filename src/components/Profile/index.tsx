import React from "react";
import { Text, View } from "react-native";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { Avatar } from "../Avatar";

export function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar imageUrl={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>
          <Text style={styles.userName}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Dia de GG</Text>
      </View>
    </View>
  );
}
