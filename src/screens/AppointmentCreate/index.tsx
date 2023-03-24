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

export function AppointmentCreate() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Background>
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
                  {guild.icon ?  <GuildIcon /> :  <View style={styles.image} />}
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
                  <Text style={styles.label}>Dia e mês</Text>
                  <View style={styles.column}>
                    <SmallNumberInput maxLength={2} />
                    <Text style={styles.divider}>/</Text>
                    <SmallNumberInput maxLength={2} />
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Horário</Text>
                  <View style={styles.column}>
                    <SmallNumberInput maxLength={2} />
                    <Text style={styles.divider}>:</Text>
                    <SmallNumberInput maxLength={2} />
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
              />
            </View>
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
