import React from "react";

import { Link } from "react-router-dom";
import './style.css'

import valorantName from '../../assets/imgs/Login/valorantNome.png'

const Login = () =>{
    
    return (
        <div className="container-login-layout">
            <div className="container-login-txt">
                <h1>
                    A CRIATIVIDADE
                    <br/>
                    É SUA MELHOR
                    <br/> 
                    ARMA.
                </h1>
            </div>
            <div className="container-login">
                <div className="container-login-form">
                    <div className="container-login-form-name">
                        <img src={valorantName} alt="valorant"/>
                    </div>
                    <div className="container-login-form-box">
                        <div className="container-login-form-box-title">
                            <h2>Bem-vindo de volta!</h2>
                        </div>
                        <div className="container-login-form-box-input">
                            <p>E-MAIL</p>
                            <input placeholder="@GMAIL.COM"/>
                        </div>
                        <div className="container-login-form-box-input">
                            <p>SENHA</p>
                            <input type='password'/>
                        </div>
                        <div className="container-login-form-box-button">
                            <Link to='/home' className="container-login-form-box-button-link">Entrar</Link>
                        </div>
                        <div className="container-login-form-box-create">
                            <Link to='/register' className="container-login-form-box-create-link">
                                Criar conta
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login