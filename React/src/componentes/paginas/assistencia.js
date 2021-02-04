import React from 'react';

export default class Assistencia extends React.Component{
    render(){
        return(
            
            <div className = "container-fluid text-white bg-secondary  text-warning">
            <h2>Assitência técnica</h2>
            <hr/>
    
<div className="container-fluid">
  <div className="row">
    <div className="col-6">
      <form>
      <div className="form-row">
        <div className="form-group  col-md-12">
        <label htmlFor="nomeCliente">Nome Completo</label>
        <input type="text" name="nome" className="form-control" id="nomeCliente"/>
        </div>

        <div className="form-group  col-md-6">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="form-control" id="email"/>
        </div>

        <div className="form-group">
        <label htmlFor="telefone">Telefone</label>
        <input type="text" name="telefone" className="form-control" id="telefone" placeholder="+55(DDD)99999-8888"/>
        </div>

    
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Serviços</label>
  <select className="custom-select my-1 mr-sm-2" name="produto" id="inlineFormCustomSelectPref">
    <option value>Selecione o serviço desejado</option>
    <option value>Selecione</option>
    <option value="1">Reparos</option>
    <option value="2">Limpeza</option>
    <option value="3">Colimação</option>
    <option value="4">Instalação</option>
  </select>

  <div className="mb-3">
    <label htmlFor="validationTextarea">Descreva o serviço desejado e as especificações do instrumento</label>
    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Por favor descreva o serviço." required></textarea>
    <div className="invalid-feedback">
      
    </div>
  </div>
    </div>

  <div>
  <button type="submit" className="btn btn-success">Enviar pedido</button>
    </div>
    </form>
    </div>
  </div>
  </div>
  </div>
            

        );
    }
}