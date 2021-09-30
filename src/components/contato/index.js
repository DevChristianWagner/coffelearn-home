import React from 'react'
import './contato.css'

function Contato() {
    return (
        <div className="contato" id="contato">
            <h1>Contato via email</h1>

            <div className="form">
                <form action="https://formsubmit.co/coffelearn@protonmail.com" method="POST" className="form">
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="name" required />
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" required />
                    <label for="message">Mensagem</label>
                    <textarea name="message" id="message" required></textarea>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://coffelearn.cf/" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div> 
    )
}

export default Contato
