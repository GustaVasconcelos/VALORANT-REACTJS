import React, { useState } from "react";

import './style.css'

import logo from '../../assets/imgs/Home/logos.png'
import logout from '../../assets/imgs/Home/logout.png'

import {Link} from 'react-scroll'
import {Link as A} from 'react-router-dom'


const Home = () =>{

    const [scrollY, setScrollY] = useState()
    window.onscroll = ()=>{  }
    window.onscroll = ()=>{ setScrollY(window.scrollY)}
    console.log(scrollY);
    
    return (

        <div>
            <header className="container-header">
                <div className="container-header-logo">
                    <img src={logo} alt='logo'/>
                </div>
                <nav className="container-header-nav">
                    <Link to="a" className={`${scrollY < 800?'ativo':''}`}  spy={true} smooth={true}>Jogue agora</Link>
                    <Link to="b" className={`${scrollY >= 800?'ativo':''}`} spy={true} smooth={true}>Noticías</Link>
                    <Link>Sobre o jogo</Link>
                    <Link>Agentes</Link>
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
                <section className="a" id="a">
                    
                </section>
                <section className="b" id="b">
                
                </section>
            </main>
        </div>
    )
}


export default Home