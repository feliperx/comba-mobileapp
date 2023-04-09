import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./styles";
import { Background } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  typeModal?: string;
};

export function ModalView({ children, closeModal, typeModal, ...rest }: Props) {
  return (
    <Modal
      transparent={true}
      animationType={"slide"}
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View
            style={
              typeModal == "short"
                ? styles.containerShort
                : styles.containerFull
            }
          >
            <Background>
              { typeModal != "short" && <View style={styles.bar} />}
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
