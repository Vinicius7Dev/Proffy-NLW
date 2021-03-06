import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIC from '../../assets/images/icons/study.png';
import giveClassesIC from '../../assets/images/icons/give-classes.png';
import heartIC from '../../assets/images/icons/heart.png';

function Landing() {
    const navigation = useNavigation();
    const [ totalConnections, setTotalConnections ] = useState(0);

    function navegateGiveClasses() {
        navigation.navigate('GiveClasses');
    }

    function navegateStudy() {
        navigation.navigate('Study');
    }

    useEffect(() => {
        api.get('/connections')
            .then(res => {
                setTotalConnections(res.data.total);
            })
            .catch(error => {});
    }, []);

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.button, styles.btnPrimary]}
                    onPress={navegateStudy}
                >
                    <Image source={studyIC} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton
                    style={[styles.button, styles.btnSecondary]}
                    onPress={navegateGiveClasses}
                >
                    <Image source={giveClassesIC} />

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.connections}>
                Total de {totalConnections} conexões já realizadas{' '}
                <Image source={heartIC} />
            </Text>
        </View>
    );
}
export default Landing;