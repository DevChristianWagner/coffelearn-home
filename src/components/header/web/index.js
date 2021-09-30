import React from 'react'
import './web.css'

function Web() {
    return(
    <div className="web">
        <div className="web-option">
            <a href='#inicio'>
                <i class="fi-rr-building option-icon"></i>Inicio
            </a>
        </div>
        <div className="web-option">
            <a href='#sobre'>  
                <i class="fi-rr-globe option-icon"></i>Sobre
            </a>
        </div>  
        <div className="web-option">
            <a href='#video'>
            <i class="fi-rr-info"></i>Video
            </a>
        </div>  
        <div className="web-option">
            <a href='#contato'>
                <i class="fi-rr-envelope option-icon"></i>Contato
            </a>
        </div>  
    </div>
)}

export default Web
