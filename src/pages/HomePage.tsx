import "../style/About.css"

const HomePage = () => {
  return (
    <>
        <h1 className="textCenter">About me</h1>
        <div>
          <h1 className="textCenter">Angel Jared Ruiz Miramontes</h1>
        </div>
          
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
        <h1 className="textCenter">Mis One Pagers</h1>
        <div className="GridOnePager">
          <div className="OnePager1">
            <img src="./public/Infectionmania.png" alt="" />
          </div>
          <div className="OnePager2">
            <img src="./public/Beyond The Sound.png" alt="" />
          </div>
          <div className="OnePager3">
            <img src="./public/Crafting Defense.png" alt="" />
          </div>
          <div className="OnePager4">
            <img src="./public/Zombie-Royal.png" alt="" />
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