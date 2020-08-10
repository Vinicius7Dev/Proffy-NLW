import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        borderColor: '#E6E6F0',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
        overflow: 'hidden'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#EEE'
    },

    profileInfo: {
        marginLeft: 16
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264D',
        fontSize: 20
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#6A6180',
        marginTop: 4
    },

    bio: {
        fontFamily: 'Poppins_400Regular',
        marginHorizontal: 24,
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180'
    },

    footer: {
        backgroundColor: '#FAFAFC',
        marginTop: 24,
        padding: 24,
        alignItems: 'center'
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#6A6180'
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#8257E5'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16
    },

    favoriteBtn: {
        backgroundColor: '#8257E5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    favorited: {
        backgroundColor: '#E33D3D'
    },

    contactBtn: {
        backgroundColor: '#04D361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    contactBtnText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16
    }

});
export default styles;