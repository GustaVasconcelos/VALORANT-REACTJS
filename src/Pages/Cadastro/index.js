import React from "react";
import { Link } from 'react-router-dom'

import './style.css'

import valorantName from '../../assets/imgs/Cadastro/valorantNome.png'



const Register = () =>{

    return (
        <div className="container-register-layout">
            <div className="container-register-txt">
                <h1>
                    CRIAR UMA
                    <br/>
                    CONTA
                </h1>
            </div>
            <div className="container-register">
                <div className="container-register-form">
                    <div className="container-register-form-name">
                        <img src={valorantName} alt="valorant"/>
                    </div>
                    <div className="container-register-form-box"> 
                        <div className="container-register-form-box-title">
                            <h2>Falta pouco!
                                <br/>
                                só precisamos de algumas 
                                <br/>
                                informações antes
                            </h2>
                        </div>
                        <div className="container-register-form-box-input">
                            <p>E-MAIL</p>
                            <input placeholder="@GMAIL.COM"/>
                        </div>
                        <div className="container-register-form-box-input">
                            <p>SENHA</p>
                            <input type='password' placeholder='****'/>
                        </div>
                        <div className="container-register-form-box-input-confirm">
                            <p>CONFIRMAR SENHA</p>
                            <input type='password' placeholder='*******'/>
                        </div>
                        <p className="container-register-form-p">As senhas informadas não coincidem</p>
                        <div className="container-register-form-box-button">
                            <Link to='/' className="container-register-form-box-button-link">Enviar</Link>
                        </div>
                        <div className="container-register-form-box-create">
                            <Link to='/' className="container-register-form-box-create-link">
                                Já possui conta?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register