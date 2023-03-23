import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather, Fontisto } from "@expo/vector-icons";

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
import { GuildIcon } from "../../components/GuildIcon";
import { SmallNumberInput } from "../../components/SmallNumberInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
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
              <RectButton>
                <View style={styles.select}>
                  {
                    // <View style={styles.image} />
                    <GuildIcon />
                  }
                  <View style={styles.selectBody}>
                    <Text style={styles.label}>Selecione um servidor</Text>
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
    </KeyboardAvoidingView>
  );
}
