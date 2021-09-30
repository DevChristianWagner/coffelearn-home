import React from 'react'
import './video.css'
import Divisor from '../../common/divisor/index'

function Video() {
    return ( <>
        <div className="container-video" id="video">

            <div className="texts-video">
                
                <h1>Video explicativo sobre a plataforma</h1>

                <div className="video-texts">
                    <iframe src="https://www.youtube-nocookie.com/embed/NYdrAIPLhIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p>Ao lado você tem acesso a um video explicativo sobre a plataforma. Eu espero que após esse video você não tenha nenhuma duvida.

                    <br /><br />    
                    
                    Caso mesmo após esse video ainda sobre alguma duvida, temos nosso discord para uma interação mais direta entre os alunos e os professores.
                
                    <br /><br />
                
                    Recomendamos fortemente que mesmo sem nenhuma duvida entre em nosso discord pois lá você ficará por dentro de todas as novidades como lançamento de novos cursos, atualização sobre preços e afins e muito mais.</p>
                </div>
            </div>
        </div>

        <Divisor />
        
        </>
    )
}

export default Video
