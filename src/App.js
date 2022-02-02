import './app.css'
import { useState } from 'react'

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularImc(){
    const alt = altura / 100
    const imc = peso / (alt*alt)
   
    if(imc < 18.5){
      setMensagem ("Você está abaixo do peso, seu imc é: " + imc.toFixed(2))
    }else if (imc > 18.5 && imc <= 24.9){
      setMensagem("Você está no peso ideal, seu imc é: " + imc.toFixed(2))
    }else if(imc > 24.9 && imc <= 30){
      setMensagem("Você está no sobrepeso, seu imc é: " + imc.toFixed(2))
    }else if(imc > 30){
      setMensagem("Você está na Obesidade, seu imc é: " + imc.toFixed(2))
    }
  }


  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <p>Vamos calcular seu imc:</p>
      <div className='content'>
        <input
          type="text"
          placeholder="Digite seu peso (Kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite sua altura (Cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularImc}>Calcular</button>

        <h2>{mensagem}</h2>
      </div>
    </div>


  )
  

  
}


