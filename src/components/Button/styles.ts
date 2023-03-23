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
    title: {
        flex: 1, 
        textAlign: 'center', 
        color: theme.colors.heading, 
        fontSize: 15,
        fontFamily: theme.fonts.text500

    }
})