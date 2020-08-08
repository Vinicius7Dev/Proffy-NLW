import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        maxWidth: 180,
        lineHeight: 37,
        fontSize: 32
    },

    description: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        marginTop: 24,
        lineHeight: 26,
        fontSize: 16
    },

    button: {
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginVertical: 40,
        backgroundColor: '#04D361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#FFF'
    }

});
export default styles;