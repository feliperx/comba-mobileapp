import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme"; 
import {getStatusBarHeight} from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create ({
    container: {
        flex: 1,
    }, 
    header: {
        flexDirection: 'row', 
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 24, 
        marginTop: getStatusBarHeight() + 26, 
        marginBottom: 42,
    },
    content: {
        marginTop: 42,
    },
    matches: {
        marginTop: 24,
        marginLeft: 24,
    },
});