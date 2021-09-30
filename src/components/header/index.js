import React, {useState} from 'react'
import './header.css'
import Web from './web/index'
import Mobile from './mobile/index'
import Entrar from './entrar'

function Header() {
        const [isOpen, setIsOpen]= useState(false)
    return (
        <div className="header">
            <div className="logo">CoffeLearn<span>.</span></div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>

                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
            
            <div className="entrar">
                    <Entrar />
                </div>
        </div>
    )
}

export default Header
