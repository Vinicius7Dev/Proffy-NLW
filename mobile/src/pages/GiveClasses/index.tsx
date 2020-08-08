import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBg from '../../assets/images/give-classes-background.png'

function GiveClasses() {
    const navigation = useNavigation();

    function backNavigation() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBg}
                style={styles.content}
            >
                <Text style={styles.title}>
                    Quer ser um proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton
                style={styles.button}
                onPress={backNavigation}
            >
                <Text style={styles.buttonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}
export default GiveClasses;