import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create ({
  container: {
   flex: 1,
   alignItems: 'center',
   padding: 20,
  }, 

  title: {
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,

  },

  titleBold: {
    fontFamily: theme.fonts.title700
  },

  content: {
    marginTop: 23,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },

  buttonTitle: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading
  },

  noButton: {
    height: 56,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    marginRight: 8
  },

  yesButton: {
    height: 56,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 8

  }
  
});