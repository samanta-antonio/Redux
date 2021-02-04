import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Rotas from './rotas';
export default class cabecalho extends React.Component{
    render(){
        return(

    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'navy'}}>
    <Link className="navbar-brand" as={Link} to="/">Andrômeda </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" as={Link} to="/">Inicio</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" as={Link} to="/produtos">Produtos</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" as={Link} to="/assistencia">Assistência</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" as={Link} to="/lojas">Nossas lojas</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" as={Link} to="/faleConosco">Fale Conosco</Link>
          </li>
      </ul>
    </div>
  </nav>
  <Rotas/>
  </Router>
        );
    }
}