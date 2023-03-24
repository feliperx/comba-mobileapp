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
    },

    formBody: {
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

    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    }, 

    column:{
        flexDirection: 'row', 
        alignItems: 'center',

    }, 

    divider: {
        marginRight: 4,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight, 
        fontSize: 15,
    },

    caractereLimit: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }, 

    footer: {
        marginVertical: 20, 
        marginBottom: 56, 
    }
    
});