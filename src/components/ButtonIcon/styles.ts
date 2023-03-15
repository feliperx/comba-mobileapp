import {StyleSheet} from 'react-native'; 
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        height: 56, 
        width: '100%', 
        borderRadius: 8,
        alignItems: 'center',
    },
    iconWrapper: {
        height: 56, 
        width: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRightWidth: 1, 
        borderRightColor: theme.colors.line, 
    }, 
    icon: { 
        width: 24, 
        height: 18,

    },
    title: {
        flex: 1, 
        textAlign: 'center', 
        color: theme.colors.heading, 
        fontSize: 15,
        fontFamily: theme.fonts.text500

    }
})