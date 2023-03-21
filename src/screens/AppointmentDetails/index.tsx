import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

export function AppointmentDetails() {
  return (
    <Background>
        <Header 
          title="oioioi"
          action={
            <BorderlessButton>
              <Fontisto
                name='share'
                size={24}
                color={theme.colors.primary}
              />
            </BorderlessButton>
          }
        />

    </Background>
  );
}
