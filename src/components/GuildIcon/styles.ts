import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme"; 

export const styles = StyleSheet.create ({
  container: {
    height: 66, 
    width: 62, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.discord,
    borderRadius: 8, 
    overflow: 'hidden',
  },
  image: {
    height: 66, 
    width: 62, 
  }

});