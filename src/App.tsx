import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'
import Button from './components/Button/Button'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <h1>¡Hola, mundo!</h1>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />

      <br /><br />
      <Button 
        label="Click me"
        onClick={() => alert('¡Hola, mundo!')}
      />
      
      <br /><br />
      <hr /><br />
      <Login />
    </>
  )
}

export default App
