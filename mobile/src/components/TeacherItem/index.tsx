import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIC from '../../assets/images/icons/heart-outline.png';
import unfavoriteIC from '../../assets/images/icons/unfavorite.png';
import whatsappIC from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars0.githubusercontent.com/u/68403363?s=460&u=4291397fb3eb0cfd2f0ff0a1a45b4e8eff1d9960&v=4' }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Nome</Text>
                    <Text style={styles.subject}>Matéria</Text>
                </View>
            </View>
                
            <Text style={styles.bio}>Bio</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$40.00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteBtn, styles.favorited]}>
                        {/*<Image source={heartOutlineIC} />*/}
                        <Image source={unfavoriteIC} />
                    </RectButton>

                    <RectButton style={styles.contactBtn}>
                        <Image source={whatsappIC} />
                        
                        <Text style={styles.contactBtnText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
export default TeacherList;