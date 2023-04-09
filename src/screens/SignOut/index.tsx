import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";

export function SignOut() {

  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deseja sair do <Text style={styles.titleBold}>COMBA</Text> ?
      </Text>
      <View style={styles.content}>
        <RectButton>
          <View style={styles.noButton}>
            <Text style={styles.buttonTitle}>Não</Text>
          </View>
        </RectButton>
        <RectButton>
          <View style={styles.yesButton}>
            <Text style={styles.buttonTitle}>Sim</Text>
          </View>
        </RectButton>
      </View>
    </View>
  );
}
