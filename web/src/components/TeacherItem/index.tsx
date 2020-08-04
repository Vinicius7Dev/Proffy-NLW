import React from 'react';

import whatsappIc from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars0.githubusercontent.com/u/68403363?s=460&u=4291397fb3eb0cfd2f0ff0a1a45b4e8eff1d9960&v=4"
                    alt="User Photo"/>
                    
                <div>
                    <strong>Professor</strong>
                    <span>Química</span>
                </div>
            </header>


            <p>
                descrição
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                    
                 <button type="button">
                    <img src={whatsappIc} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}
export default TeacherItem;