import React from 'react';
import * as Script from './../../JavaScript/funcoes';

  export default class Produtos extends React.Component{
      constructor(props){
          super(props);
          this.state = {
              BD: []
          }
      }
      async componentDidMount(){
        let resposta = await fetch("http://localhost:8081/produtos");
        let dados = await resposta.json();
        this.setState({BD: dados});
    }

      render(){
          return(
          <div className="container-fluid text-white bg-secondary">
          <header>
          <div className = "container-fluid text-white bg-secondary text-warning">
           <h2>Produtos</h2>
           <hr/>
          </div>
          </header>
          
          <div className = "container-fluid text-white">
          <section className="categorias bg-secondary">
           <div className="categorias">
               <h3 style={{color:"black"}}><b>Categorias</b></h3>
               <ul>
                  <li onClick={Script.exibir_todos}>Todos(12)</li>
                    <li onClick={() => Script.exibir_categoria('monoculos')}>Monóculos(2)</li>
                    <li onClick={() => Script.exibir_categoria('binoculos')}>Binóculos(2)</li>
                    <li onClick={() => Script.exibir_categoria('lunetas')}>Lunetas(1)</li>
                    <li onClick={() => Script.exibir_categoria('refletores')}>Telescópios Refletores(2)</li>
                    <li onClick={() => Script.exibir_categoria('refratores')}>Telescópios Refrator(1)</li>
                    <li onClick={() => Script.exibir_categoria('acessorios')}>Acessorios(4)</li>
                </ul>
          </div>
          </section>
          </div> 
          
          
          {this.state.BD && this.state.BD.map((item, id)=>
            
            <div className="box_produtos" id={item['categoria']}>
            <img className="Imagens" src={require('./../../' + item['imagens']).default} alt=""/>
            <br/>
            <p className="descricao">{item['descricao']}</p>
            <hr/>
            <p className="descricao">de  <strike> {parseInt(item['preco_antigo']).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})} </strike>  por </p><br/>
            <p className="precos">   <strong>{parseInt(item['preco_promo']).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</strong> à vista</p><br/>
            <input type="button" onClick={() => Script.comprar()} value="Comprar"/>
            </div>
            
          )}
               
                
          </div>
            
            
                
          );
      }
      
  }