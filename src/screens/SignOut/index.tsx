import React, { useState } from "react";
import { Alert, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Load } from "../../components/Load";


type Props = {
  handleNoSignOutButton: () => void;
}

export function SignOut({handleNoSignOutButton} : Props) {
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuth();
  const navigation = useNavigation();

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
            <TouchableOpacity onPress={handleNoSignOutButton}>
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
