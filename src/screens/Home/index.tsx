import React, { useState, useCallback } from "react";
import { View, FlatList, KeyboardAvoidingView } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Load } from "../../components/Load";

import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Platform } from "react-native";
import { ModalView } from "../../components/ModalView";
import { SignOut } from "../SignOut";


export function Home() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const navigation = useNavigation();

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }
    setLoading(false);
  }

  function handleSignOut() {
    setOpenSignOutModal(true);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile handleButton={handleSignOut}/>
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <CategoryList
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        {loading ? (
          <Load />
        ) : (
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />
            <FlatList
              data={appointments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 60 }}
            />
          </>
        )}
      </View>
    </Background>
    <ModalView visible={openSignOutModal} closeModal={handleSignOut} typeModal="short">
        <SignOut/>
      </ModalView>
    </KeyboardAvoidingView>
  );
}
