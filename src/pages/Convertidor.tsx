import "../style/ConvertidorStyle.css";
import { useState } from "react";


type Props = {
  numero?:number,
  resultado?:number,
}

const Convertidor = (props:Props) => {

  const {numero, resultado} = props;
  const [valor, setValor] = useState(numero?numero:0);
  const [Resultado, setResultado] = useState(resultado?resultado:0);

  function CaM(){
    setResultado(valor / 100);
  }

  function MaC(){
      setResultado(valor * 100)
  }

  function CaK(){
    setResultado(valor / 100000);
  }

  function KaC(){
      setResultado(valor * 100000)
  }

  function MaK(){
    setResultado(valor / 1000);
  }

  function KaM(){
      setResultado(valor * 1000)
  }


    const [userNumber, setUserNumber] = useState<number | undefined>(undefined);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputNumber = parseFloat(e.target.value);
      if (!isNaN(inputNumber)) {
        setUserNumber(inputNumber);
        setValor(inputNumber);
      } else {
        setUserNumber(undefined);
      }
    };

  return (
    <>
        <div className="contenedor">

          <h1>Convertidor de unidades</h1>
          <h3>Numero a convertir</h3>
          <input type="number" id="numberInput" onChange={handleInputChange} value={userNumber === undefined ? '' : userNumber}/>
          <h3>Resultado:</h3>
          <h3>{Resultado}</h3>

          <button onClick={CaM}> cm a m </button>
          <button onClick={MaC}> m a cm</button>
          <button onClick={CaK}> cm a km </button>
          <button onClick={KaC}> km a cm</button>
          <button onClick={MaK}> m a km </button>
          <button onClick={KaM}> km a m</button>
        </div>

        <hr />
        <br />
        <div>
        <div className="Text">
          <h1>Redes</h1>
        </div>
        <br />
          <footer>
            <div className="Redes">
              <div className="F-1">
                <a href="https://www.linkedin.com/in/ángel-jared-ruíz-miramontes-344431289/">
                  <img src="icone-linkedin-ronde-originale.png" alt=""/>
                </a>
              </div>
              <div className="F-2">
                <a href="https://kitaru1960.itch.io">
                  <img src="itch-io-icon-512x512-wwio9bi8.png" alt=""/>
                </a>
              </div>
            </div>
          </footer>
        </div>
        
    </>
  )
}

export default Convertidor