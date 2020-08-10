import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import backIC from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';

interface PageHeaderProps {
    title: string,
    headerRigth?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({title, headerRigth, children}) => {
    const navigate = useNavigation();

    function navigateBack() {
        navigate.navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton
                    onPress={navigateBack}
                >
                    <Image source={backIC} resizeMode="contain" />
                </BorderlessButton>
                
                <Image
                    source={logo}
                    resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                
                {headerRigth}
            </View>

            {children}
        </View>
    );
}
export default PageHeader;