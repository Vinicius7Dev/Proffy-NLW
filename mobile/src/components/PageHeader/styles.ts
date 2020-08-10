import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        padding: 40,
        backgroundColor: '#8257E5'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        marginVertical: 40,
        maxWidth: 160,
        lineHeight: 32,
        fontSize: 24,
        color: '#FFF'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    
});
export default styles;