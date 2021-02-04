import {Switch, Route} from 'react-router-dom';
import Index from './paginas/paginaInicial';
import Produtos from './paginas/produtos';
import Lojas from './paginas/lojas';
import Assistencia from './paginas/assistencia';
import FaleConosco from './paginas/faleConosco';


export default function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/produtos" component={Produtos}/>
            <Route exact path="/assistencia" component={Assistencia}/>
            <Route exact path="/lojas" component={Lojas}/>
            <Route exact path="/faleConosco" component={FaleConosco}/>
          
        </Switch>
    );
 }