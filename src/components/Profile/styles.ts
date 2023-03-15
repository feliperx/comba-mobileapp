import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme"; 

export const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
        
    }, 
    user: {
        flexDirection: 'row',
        
    }, 

    greeting : {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        marginRight: 5
    }, 

    userName: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 24,
    }, 

    message : {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400, 
        fontSize: 13, 
        marginTop: 2,

    }




});