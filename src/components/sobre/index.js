import React from 'react'
import './sobre.css'
import ils from '../../assents/ils/undraw_Dev_focus_re_6iwt 1.svg'

function Sobre() {
    return (
        <div className="container-sobre" id="sobre">

            <div className="container-sb">
                <img src={ ils } alt="" draggable="false"/>

                <div className="texts-sobre">
                    <h1>Sobre nós</h1>
                    <p>Somos uma plataforma focada em ajudar jogadores de minecraft a se desenvolverem como criadores de servidores. Com essa plataforma você conseguira a desenvolver 100% do seu servidor sozinho!

                    <br /> <br />    

                    Nessa plataforma você vai aprender sobre Builds, configuração de  plugins ja prontos, criação de seus proprios plugins utilizando Java, gerenciamento e treinamento de equipe, configuração de loja e muito mais!

                    <br /> <br />  

                    Nós prezamos 100% pelo seu aprendizado. Nossa equipe está disponivel 24h para sanar todas as suas duvidas! Caso você queira ter um contato mais direto conosco, você pode entrar em nosso Discord!</p>
                </div>
            </div>
            
        </div>
    )
}

export default Sobre
