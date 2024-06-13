import './App.css'
import Mensaje from './Mensaje'


const Description = ()=>{ // Esto es un Componente siempre mayuscula
  return <p>Esta es la app del curso fullStack</p>
}

const App = () => {  
  return (
      <div className="App">
       {/* Esto mande el color */}
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso ' />
      <Mensaje color='yellow' message='de React' />
      <Description></Description>
    </div>
  )
}

export default App