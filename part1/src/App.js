import "./App.css";
import Description from "./Mensaje.js";


//creando un componente
const Message = () => {
  return <h1>Bienvenidos a React</h1>;
};

//Pasandole a un valor mediante un parametro a nuestro componente 
const Mensaje = (props) => {
  console.log(props)
  return<h2 style={{color: props.color }}>
      {props.title}
  </h2>
}


const App = () => {
  const mensaje = "Hola";
  const a = 2;
  const b = 3;
  return (
    <div className="App">
      {mensaje + " evaluando desde JSX"}
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando</strong>
      <div>
        <p>
          El resultado de la suma es:
          {a + b}
        </p>
        <Message />
        <Description />
        <Mensaje color="red" title="Estamos " />
        <Mensaje color="green" title="Trabjando" />
        <Mensaje color="blue" title="En un curso de React" />
      </div>
    </div>
  );
};

export default App;
