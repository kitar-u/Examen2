import "../style/About.css"

const HomePage = () => {
  return (
    <>
        <h1>HomePage</h1>
          
        <div className="AboutFlex">
          <h1>Juego en itch.io</h1>
          <div className="GridContenedor">
            <div className="Juego">
                <img src="./public/Juego.png" alt="" />
            </div>
            <h3 className="TextGame">Gameplay</h3>
            <div className="Gameplay">
                <img src="./public/game.png" alt="" />
            </div>
            <h3 className="TextTienda">Tienda</h3>
            <div className="Tienda">
                <img src="./public/Tienda.png" alt="" />
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className="Text">
          <h1>Redes</h1>
        </div>
        <br />

        <div>
          <footer>
            <div className="Redes">
              <div className="F-1">
                <a href="https://www.linkedin.com/in/ángel-jared-ruíz-miramontes-344431289/">
                  <img src="./public/icone-linkedin-ronde-originale.png" alt=""/>
                </a>
              </div>
              <div className="F-2">
                <a href="https://kitaru1960.itch.io">
                  <img src="./public/itch-io-icon-512x512-wwio9bi8.png" alt=""/>
                </a>
              </div>
            </div>
          </footer>
        </div>
    </>

  )
}

export default HomePage