import React, { useEffect, useState } from "react";
import { View, FlatList, ImageBackground, Text, Alert } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { api } from "../../services/api";
import BannerImg from "../../assets/banner.png";

import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Member, MemberProps } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";
import { AppointmentProps } from "../../components/Appointment";
import { Load } from "../../components/Load";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
};

export function AppointmentDetails() {
  const [loading, setLoading] = useState(true);
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildInfo() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch (error) {
      Alert.alert('Verifique as configuracoes do servidor. Sera que o Wigget esta habilitado?')
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuildInfo();
  },[])

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
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCenter />}
            style={styles.members}
          />
        </>
      )}
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
