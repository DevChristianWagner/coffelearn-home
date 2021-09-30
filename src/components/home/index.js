import React from 'react'
import './home.css'
import Divisor from '../../common/divisor/index'
import mao from '../../assents/bem-vindo.png'
import ils from '../../assents/ils/home 1.svg'

function Home() {
    return ( <>
        <div className="container-home" id="inicio">
            <div className="home">
                <div className="bemvindo-container">
                    <img src={ mao } alt="Heeeyy" draggable="false"/>
                    <h1>Olá, bem-vindo.</h1>
                </div>

                <div className="texts">
                    <h1>Aprendizado é <span>Constante</span>.</h1>
                    <h2>Seja um aluno nosso, <span>sem custos.</span></h2>
                </div>

                <div className="info-button">
                    <a href="#sobre">Mais informações</a>
                </div>
        
            </div>

            <div className="img">
                <img src={ ils } alt="" draggable="false"/>
            </div>
        </div>

            <Divisor />
            
        </>
    )
}

export default Home
