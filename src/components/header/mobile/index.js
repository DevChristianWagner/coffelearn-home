import React from 'react'
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
    return <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <i class="fi-rr-cross-circle"></i>
            </div>
            <div className='mobile-options'>   
                <div className="mobile-option">
                    <a href='#inicio'>
                        <i class="fi-rr-building option-icon"></i>Inicio
                    </a>
                </div>
                <div className="mobile-option">
                    <a href='#sobre'>  
                        <i class="fi-rr-globe option-icon"></i>Sobre
                    </a>
                </div>  
                <div className="mobile-option">
                    <a href='#video'>
                        <i class="fi-rr-info"></i>Video
                    </a>
                </div>  
                <div className="mobile-option">
                    <a href='#contato'>
                        <i class="fi-rr-envelope  option-icon"></i>Contato
                    </a>
                </div>

                <div className="button-entrar">
                    <div className="mobile-option">
                        <a href='https://coffelearn.space/breve' target='_blank' rel='external'>Entrar</a>
                    </div>
                </div>  

            </div>
        </div>
}

export default Mobile
