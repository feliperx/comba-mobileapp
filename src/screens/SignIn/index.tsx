import React, { useState } from "react";
import { Text, View, TextInput, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import IllustrationImage from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
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
        <ButtonIcon title="Entrar com Discord" activeOpacity={1}/>
      </View>
    </View>
  );
}
