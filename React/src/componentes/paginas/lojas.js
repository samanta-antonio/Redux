import React from 'react';

export default class Lojas extends React.Component{
    render(){
        return(
            
            <div className = "container-fluid text-white bg-secondary">
            <h2>Nossas lojas</h2>
            <hr/>
            <br/><br/><br/><br/>
           <table border="0" width="100%" celpadding="20">
        
                <tbody>
                    <td width="20%">
                        <h3>São Paulo</h3>
                        <p>Avenida Estrelas, 30</p>
                        <p>Centro</p>
                        <p>(11)2323-2121</p>
                    </td>

                    <td width="20%">
                        <h3>Bauru</h3>
                        <p>Rua Messier, 20</p>
                        <p>Jardim Colonial</p>
                        <p>(14)7770-7077</p>
                    </td>

                    <td width="20%">
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida Sagan, 562</p>
                        <p>Parque Super Novas</p>
                        <p>(21)45-8998</p>
                    </td>

                    <td width="20%">
                        <h3 style={{backgroundColor: "rgb(0, 0, 0)"}}><strong>Em breve nova unidade!</strong></h3>
                        <p>Salvador</p>
                        <p>Rua Itaqua,230</p>
                        <p>Parque das Flores</p>
                        
                    </td>
                </tbody>
           </table>   
           </div> 


        );
    }
}