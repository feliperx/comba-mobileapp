import React from "react";
import { Text, View, Image, Alert, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import IllustrationImage from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    console.log("OAIDOE");
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  function handleSignIn2() {
    console.log("OAIDOE");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImage}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas{"\n"}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
