import './app.css';
import "./componentes/Usuario";
import Usuario from "./componentes/Usuario";





function app(){
    return (
        <div className="App Carlos">
            <h1 className="text-center text-light pt-3">Hola Mundo</h1>

        
        <Usuarios nombre='Julieta' edad='25' color="green"/>
        <Usuarios nombre='Andre' edad='51' color='blue'/>
        <Usuarios nombre='Reyna' edad='30' color='violet' localidad='Mexico'/>

        
        </div>
);
}


export default app;