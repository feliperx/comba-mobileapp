import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export type GuildProps = {

}

export type AppointmentProps = {
  id: string;
  guild: GuildProps; 
  category: string; 
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: object;
};


export function Appointment({data, ...rest}: Props) {

  const {secondary80, secondary100} = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        
      </View>

    </RectButton>
  );
}
