import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    btnPrimary: {
        backgroundColor: '#9871F5'
    },

    btnSecondary: {
        backgroundColor: '#04D361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#FFF'
    },

    connections: {
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular'
    }

});
export default styles;