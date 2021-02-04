import React from 'react';

export default class rodape extends React.Component{
    render(){
        return(

    <div className="containerFluid bg-secondary"  style={{textAlign: "center"}}>
    <div className="formas_pagamento">
    <p><b>Formas de Pagamento</b></p>
    <img src={require('./../Imagens/formasdepagamento.png').default} width="25%" alt="Formas de Pagamento"/>
     <p>&copy; Andromeda Corporation</p>
     </div>
    </div>
       );
    }
}