import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="container-footer">
            <h1>CoffeLearn</h1>

            <div className="footer-links">
                <div className="nav">
                    <ul>
                        <li><a href="#inicio" >Inicio</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#video">Video</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div className="entrar-footer">
                    <ul>
                        <li><a href="https://coffelearn.space/login">Entrar</a></li>
                    </ul>
                </div>

                <div class="links">
                    <ul>
                        <li><a href="https://coffelearn.space/login">Plataforma</a></li>
                        <li><a href="https://discord.gg/kBR7yTb9xz">Ajuda</a></li>
                        <li><a href="https://discord.gg/kBR7yTb9xz">Termos e Condições</a></li>
                        <li><a href="https://discord.gg/kBR7yTb9xz">Discord</a></li>
                        <li><a href="https://discord.gg/kBR7yTb9xz">Outros</a></li>
                    </ul>
                </div>
            </div>

            <div className="copy">
                <h1>CoffeLearn - Feito com ☕ por CoffeLearn</h1>
            </div>
        </div>
    )
}

export default Footer
