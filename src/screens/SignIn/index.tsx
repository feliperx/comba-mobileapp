import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function SignIn() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        Hello World x.x
      </Text>
      <TextInput style={styles.input} onChangeText={setText} />
      <Text>Enter: {text}</Text>
    </View>
  );
}
