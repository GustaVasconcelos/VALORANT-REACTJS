import React from "react";
import { Routes, Route } from 'react-router-dom'
import Register from "../Pages/Cadastro";
import Home from "../Pages/Home";
import Login from "../Pages/Login";



const Content = () => {
   return(
    <main>
        {/* Definindo as rotas do meu projeto */}
        <Routes>
            {/* Telas que vão ser renderizada */}
            <Route exact path="/" element={<Login/>}></Route> 
            <Route exact path="/register" element={<Register/>}></Route> 
            <Route exact path='/home' element={<Home/>}></Route>
        </Routes>
    </main>
   )
}

export default Content;