import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {TeacherItemProps} from '../../components/TeacherItem';

function TeacherList() {
    const [filterVisible, setFilterVisible] = useState(false);

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function showSearchForm() {
        setFilterVisible(!filterVisible)
    }
    
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
                const favoritedTeachersIds = favoritedTeachers.map((teacher: TeacherItemProps) => {
                    return teacher.id;
                });

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    async function searchTeachers() {
        loadFavorites();

        const res = await api.get('/classes', { 
            params: {
                subject,
                week_day,
                time
            }
        });

        setFilterVisible(false);
        setTeachers(res.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRigth={(
                    <BorderlessButton
                        onPress={showSearchForm}
                    >
                        <Feather
                            name="filter"
                            size={20}
                            color={'#FFF'} />
                    </BorderlessButton>
                )}
            >
                {filterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}> Matéria  </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#C1BCCC"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#C1BCCC"
                                    onChangeText={text => setWeekDay(text)}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#C1BCCC"
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton
                            style={styles.searchBtn}
                            onPress={searchTeachers}
                        >
                            <Text style={styles.searchBtnText}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >

                {teachers.map((teacher: TeacherItemProps, i) => {
                    return <TeacherItem
                            key={i}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)} />
                })}
            </ScrollView>
        </View>
    );
}
export default TeacherList;