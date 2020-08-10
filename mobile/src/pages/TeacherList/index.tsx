import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    const [filterVisible, setFilterVisible] = useState(false);

    function showSearchForm() {
        setFilterVisible(!filterVisible)
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
                            placeholderTextColor="#C1BCCC" />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#C1BCCC" />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#C1BCCC" />
                            </View>
                        </View>

                        <RectButton style={styles.searchBtn}>
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}
export default TeacherList;