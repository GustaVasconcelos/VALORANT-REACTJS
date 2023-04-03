import React, { useState } from "react";

import './style.css'

import logo from '../../assets/imgs/Home/logos.png'
import valoratName from '../../assets/imgs/Home/valorantNome.png'
import logout from '../../assets/imgs/Home/logout.png'
import conhecaImg from '../../assets/imgs/Home/conheca-img.png'
import personagens from '../../assets/imgs/Home/personagens-agentes.png'

import {Link} from 'react-scroll'
import {Link as A} from 'react-router-dom'


const Home = () =>{

    
    return (

        <div>
            <header className="container-header">
                <div className="container-header-logo">
                    <img src={logo} alt='logo'/>
                </div>
                <nav className="container-header-nav">
                    <Link to="container-main-section-one" activeClass="ativo"  spy={true} smooth={true}>Jogue agora</Link>
                    <Link to="container-main-section-two" activeClass="ativo"  spy={true} smooth={true}>Sobre o jogo</Link>
                    <Link to="container-main-section-three" activeClass="ativo"  spy={true} smooth={true} >Agentes</Link>
                    <Link to="container-main-section-four"activeClass="ativo" spy={true} smooth={true}>Noticías</Link>
                </nav>
                <div className="container-header-btns">
                    <h3>A-</h3>
                    <h3>A</h3>
                    <h3>A+</h3>
                </div>
                <div className="container-header-logout">
                    <A to='/'>Sair <span><img src={logout} alt='logout'></img></span></A>
                </div>
            </header>
            <main>
                <section id="container-main-section-one">
                    <div className="container-main-section-one-txt">
                        <div>
                            <p>Um jogo de tiro tático 5x5 com personagens originais</p>
                            <img src={valoratName} alt="valorant name"/>
                            <A to='https://playvalorant.com/pt-br/download/' target="_blank">JOGUE GRÁTIS</A>
                        </div>
                    </div>
                </section>
                <section id="container-main-section-two">
                    <div className="container-main-section-two-box">
                        <div className="container-main-section-two-box-img">
                            <img src={conhecaImg} alt="conheça"/>
                        </div>
                        <div className="container-main-section-two-box-txt">
                            <h1>CONHEÇA O VALORANT</h1>
                            <h5>DESAFIE SEUS LIMITES</h5>
                            <p>Viva uma experiência unica com os cenários mais incriveis. Pense de forma estratégica e encare seus adversários nos modos <span>Competitivo</span> e <span>Sem Ranque</span>, além da <span>Disputa da Spike</span> e do <span>Mata-Mata</span>.Não esqueça de planejar bem, você contará com <span>uma vida por rodada</span>, contando no total com 13 rodadas
                            Com <span>uma vida por rodada</span>, com o total de 13 rodadas.
                            <br/>
                            <br/>
                            Conheça também a história dos seus campeõs e agentes com uma série de animação original disponivel no <span>Youtube!</span></p>
                            <A to='https://playvalorant.com/pt-br/download/' target="_blank">JOGUE AGORA</A>
                        </div>
                    </div>
                </section>
                <section id="container-main-section-three">
                    <div className="container-main-section-three-txt">
                        <div>
                            <h1>AGENTES</h1>
                            <h5>A CRIATIVIDADE É SUA MELHOR ARMA.</h5>
                            <p>Mais do que armas e munição, <span>VALORANT</span> inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!</p>
                            <A>VER TODOS OS AGENTES</A>
                        </div>
                    </div>
                    <div className="container-main-section-three-img">
                        <img src={personagens} alt="personagens"/>
                    </div>
                </section>
                <section id="container-main-section-four">
                    <div className="container-main-section-four-title">
                        <h1>NOTICÍAS</h1>
                    </div>
                    <div className="container-main-section-four-slider">

                    </div>
                </section>
            </main>
        </div>
    )
}


export default Home