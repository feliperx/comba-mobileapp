import { StyleSheet } from "react-native"; 
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create ({
    container: {
        flex: 1
   
    },

    label: {
        fontFamily: theme.fonts.title700, 
        fontSize: 18,
        color: theme.colors.heading,
    }, 

    form: {
        paddingHorizontal: 24, 
        marginTop: 32
    },

    select: {
        flexDirection: 'row',
        width: '100%',
        height: 68,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },

    image: {
        width: 64, 
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1, 
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
    },

    selectBody: {
        flex: 1, 
        alignItems: 'center', 


    }, 
    
});