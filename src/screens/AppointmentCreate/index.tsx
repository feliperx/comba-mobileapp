import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { CategoryList } from "../../components/CategoryList";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallNumberInput } from "../../components/SmallNumberInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";

import { COLLECTION_APPOINTMENTS } from "../../configs/database";


export function AppointmentCreate() {

  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }
  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  async function handleSaveAppointment() {

    const newAppointment = {
      id: uuid.v4,
      guild,
      category,
      date: `${day}/${month} as ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>
          <CategoryList
            categorySelected={category}
            setCategory={handleCategorySelect}
            hasCheckbox={true}
          />
          <View style={styles.form}>
            <View style={styles.formBody}>
              <RectButton onPress={handleOpenGuildsModal}>
                <View style={styles.select}>
                  {guild.id || guild.icon ? (
                    <GuildIcon guildId={guild.id} iconId={guild.icon} />
                  ) : (
                    <View style={styles.image} />
                  )}
                  <View style={styles.selectBody}>
                    <Text style={styles.label}>
                      {guild.name ? guild.name : "Selecione um servidor"}
                    </Text>
                  </View>
                  <Feather
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                  />
                </View>
              </RectButton>
              <View style={styles.field}>
                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>
                    Dia e mês
                  </Text>
                  <View style={styles.column}>
                    <SmallNumberInput maxLength={2} onChangeText={setDay} />
                    <Text style={styles.divider}>/</Text>
                    <SmallNumberInput maxLength={2} onChangeText={setMonth} />
                  </View>
                </View>

                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>
                    Horário
                  </Text>
                  <View style={styles.column}>
                    <SmallNumberInput maxLength={2} onChangeText={setHour} />
                    <Text style={styles.divider}>:</Text>
                    <SmallNumberInput maxLength={2} onChangeText={setMinute} />
                  </View>
                </View>
              </View>

              <View style={[styles.field, { marginBottom: 12 }]}>
                <Text style={styles.label}>Descricao</Text>
                <Text style={styles.caractereLimit}>Max 100 caracteres</Text>
              </View>
              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                onChangeText={setDescription}
              />
            </View>
            <View style={styles.footer}>
              <Button title="Agendar" onPress={handleSaveAppointment}/>
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
