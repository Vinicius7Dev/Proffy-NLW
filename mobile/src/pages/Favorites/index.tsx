import React, { useState } from 'react'
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {TeacherItemProps} from '../../components/TeacherItem';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
    );

    function loadFavorites() {
        AsyncStorage.getItem('favorites')
        .then(res => {
            if(res){
                const favoritedTeachers = JSON.parse(res);

                setFavorites(favoritedTeachers);
            }
        });
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: TeacherItemProps) => {
                    return <TeacherItem
                                key={teacher.id}
                                teacher={teacher}
                                favorited
                            />
                })}
            </ScrollView>
        </View>
    );
}
export default Favorites;