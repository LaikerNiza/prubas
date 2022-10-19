export default function Usuarios(props) {
    return (
        <div className="m-2 text-white" style={{backgroundColor:props.color}}>
            <h3>Nombre:{props.nombre}</h3>
            <p>Edad: {props.edad}</p>
            <p>Localidad: {props.localidad}</p>

        </div>
    ); 
}

