import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIc from '../../assets/images/icons/warning.svg'

import './styles.css';
import api from '../../services/api';

function TeacherForm() {
    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');
    const [ scheduleItems, setScheduleItems ] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    const history = useHistory();

    function createClass(e: FormEvent) {
        e.preventDefault();

        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        })
        .then(() => {
            alert('Cadastro realizado com sucesso!');
        })
        .catch(() => {
            alert('[ERRO] Uma falha inesperada ocorreu, tente novamente.');
        });

        history.push('/');
    }

    function addNewScheduleitem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 1,
                from: '',
                to: ''
            }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((element, index) => {
            if(position === index)
                return {...element, [field]: value};
            
            return element;
        });

        setScheduleItems(updateScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas."
                description="O primeiro passo é preencher este formulário de inscrição."    
            />

            <main>
                <form onSubmit={createClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        
                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={e => setName(e.target.value)} />

                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)} />

                        <Input 
                            name="whatsapp"
                            label="Whatapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)} />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={e => setBio(e.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre à aula</legend>
                        
                        <Select
                            name="subject"
                            label="Matéria"
                            options={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Portugês', label: 'Portugês'},
                                {value: 'Matemática', label: 'Matemática'},
                                {value: 'Física', label: 'Física'},
                                {value: 'História', label: 'História'},
                                {value: '...', label: '...'}
                            ]}
                            value={subject}
                            onChange={e => setSubject(e.target.value)} />
                        
                        <Input
                            name="cost"
                            label="Custo por hora"
                            value={cost}
                            onChange={e => setCost(e.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleitem}>
                                + Novo horário
                            </button>
                        </legend>
                        
                        {scheduleItems.map((element, index) => {
                            return (
                            <div key={index} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    value={element.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                        {value: '0', label: 'Domingo'},
                                        {value: '1', label: 'Segunda-feira'},
                                        {value: '2', label: 'Terça-feira'},
                                        {value: '3', label: 'Quarta-feira'},
                                        {value: '4', label: 'Quinta-feira'},
                                        {value: '5', label: 'Sexta-feira'},
                                        {value: '6', label: 'Sábado'}
                                    ]}
                                />
                                <Input
                                    name="from"
                                    label="Das"
                                    type="time"
                                    value={element.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                                <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                    value={element.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                            </div>)
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIc} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}
export default TeacherForm;