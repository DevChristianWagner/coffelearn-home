import React from 'react'
import './aulas.css'
import Divisor from '../../common/divisor/index'
import ils from '../../assents/ils/undraw_Youtube_tutorial_re_69qc 1.svg'

function Aulas() {
    return ( <>
        <div className="container-aulas">

            <div className="texts-aula">
                <h1>Assista as aulas quando quiser</h1>

                <p>Com o nosso sistema de Stream de aulas, com uma conexão com a internet você pode estudar de onde quiser e continuar suas aulas de onde você parou.</p>

                <a href="https://coffelearn.cf/">Continuar de onde parou</a>
                
            </div>

            <div className="img-aula">
                <img src={ ils } alt="" draggable="false" />
            </div>
        </div>
            <Divisor /> 
        </>
    )
}

export default Aulas
