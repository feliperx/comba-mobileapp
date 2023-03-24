import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  isCenter?: boolean;
};

export function ListDivider({ isCenter }: Props) {
  return (
    <View
      style={[
        styles.container,
        isCenter ? { marginVertical: 12 } : { marginTop: 2, marginBottom: 31 },
      ]}
    />
  );
}
