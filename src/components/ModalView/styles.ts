import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create ({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  }, 

  containerFull: {
    flex: 1, 
    marginTop: 100,
  }, 
  containerShort: {
    flex: 1, 
    marginTop: 550,
  }, 

  bar: {
    width: 39, 
    height: 2, 
    borderRadius: 2, 
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  }

});