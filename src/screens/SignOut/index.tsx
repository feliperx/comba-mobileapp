import React, { useState } from "react";
import { Alert, Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Load } from "../../components/Load";

export function SignOut() {
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuth();

  async function handleYesSignOutButton() {
    try {
      setLoading(true);

      await signOut();
    } catch (error) {
      Alert.alert("Falha ao tentar sair. Tente de novo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <>
          <Text style={styles.title}>
            Deseja sair do <Text style={styles.titleBold}>COMBA</Text> ?
          </Text>
          <View style={styles.content}>
            <TouchableOpacity onPress={() => console.log("oi")}>
              <View style={styles.noButton}>
                <Text style={styles.buttonTitle}>Não</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleYesSignOutButton}>
              <View style={styles.yesButton}>
                <Text style={styles.buttonTitle}>Sim</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
