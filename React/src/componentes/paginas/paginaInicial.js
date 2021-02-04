import React from 'react';

export default class PaginaInicial extends React.Component{
    render(){
        return(
            <div>
            <div className = "container-fluid text-white bg-secondary">
                      <main>
                          <h2 style={{textAlign: "center"}}>Andrômeda - Instrumentação e Assistência</h2>
                          <p id="cupom" >Em sua primeira compra use o cupom <strong>UNI10</strong> para receber <strong>10% de desconto!</strong></p>
                      </main>
           
                                                    
                                                            
                            <div className = "row-sm-3">
                            <center>
                                <table>
                                    <tbody>
                                        <td>
                                            <div className="produtos"><a href="produtos.html"><img src={require('./../../Imagens/andromedagalaxy.jpg').default} alt="Clique e confira as promoções"/></a></div>
                                        </td>
                                        <td>
                                            <div className="assistencia"><a href="assistencia.html"><img src={require('./../../Imagens/galaxiaandromeda.jpg').default}  alt="Solicite nossos serviços"/></a></div>
                                        </td>
                                    </tbody>
                                </table>
                            </center>
                            </div>
                        </div>
                    </div>


              );
    }
}