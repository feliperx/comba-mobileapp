import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { Avatar } from "../../components/Avatar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategoryList } from "../../components/CategoryList";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";


export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  function handleAppointment() {
    navigation.navigate('AppointmentDetails');
  }

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Legen.. wf ..dary",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "26/04 as 20h40",
      description: "Dia de ganhar mais xp",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Legen.. wf ..dary",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "26/04 as 20h40",
      description: "Dia de ganhar mais xp",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar imageUrl="https://github.com/feliperx.png" />
          <Profile />
          <ButtonAdd />
        </View>
        <CategoryList
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 7" />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointment} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  );
}
