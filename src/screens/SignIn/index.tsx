import React, { useState } from "react";
import { Text, View, TextInput, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import IllustrationImage from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Home } from "../Home";

export function SignIn() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
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
        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
}
