import React from 'react'
import './duvida.css'
import ils from '../../assents/ils/undraw_Updated_resume_re_q1or.svg'

function Duvida() {
    return (
        <div className="container-duvida">

            <div className="texts-duvida">
                <h1>Ainda estou com duvida sobre a plataforma.</h1>

                <p>Agora você terá acesso a um video mostrando a plataforma e sanando as duvidas mais comuns. Caso você mesmo depois do video tenha duvidas, você pode entrar em nosso discord.
                
                    <br /> <br />
            
                Em nosso discord nós podemos dar uma ajuda mais direta em nosso sistema de Ticket.</p>

                <div className="button-duvida">
                    <a href="#video">Assistir video</a>
                </div>

            </div>

            <img src={ ils } alt="" draggable="false" />
            
        </div>
    )
}

export default Duvida
