import React from "react";
import { Alert, Text, View } from "react-native";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { Avatar } from "../Avatar";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
  handleButton: () => void;
}


export function Profile({handleButton, ...rest} : Props) {
  const { user, signOut } = useAuth();
  
  function handleSignOut() {
    Alert.alert('Logout','Deseja sair do Comba?',
    [
      {
        text: 'Nao',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => signOut()
      }
    ])
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleButton} {...rest}>
        <Avatar imageUrl={user.avatar} />
      </RectButton>
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
