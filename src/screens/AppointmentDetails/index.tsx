import React, { useState } from "react";
import { View, FlatList, ImageBackground, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";

import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {

  const members = [
    {
      id: '1',
      username: 'Felipe',
      avatarUrl: 'https://www.github.com/feliperx.png', 
      status: 'online'
    },
    {
      id: '2',
      username: 'Felipe',
      avatarUrl: 'https://www.github.com/feliperx.png', 
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent} >
          <Text style={styles.title}>Legen.. wf .. dary</Text>
          <Text style={styles.subtitle}>
            Vamos para cima, sem perder mmr, jamais.
          </Text>
        </View>
      </ImageBackground>
      <ListHeader 
        title="Jogadores"
        subtitle="Total 7"
      />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <Member data={item}/>
      }
        ItemSeparatorComponent={() => <ListDivider/>}
        style={styles.members}
      />
      <View style={styles.footer}>

        <ButtonIcon  title='Entrar na partida'/>
      </View>
    </Background>
  );
}
