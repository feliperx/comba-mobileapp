import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>
          <Text style={styles.userName}>Felipe</Text>
        </View>
        <Text style={styles.message}>Dia de GG</Text>
      </View>
    </View>
  );
}
