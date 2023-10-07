import { useState } from "react";
import { useEffect } from "react";
import "../style/Pokemon.css";

type Props = {
    pokemonName:string,
    pokemonAbilities:string[],
    pokemonTypes:string[],
    pokemonImg:string,
}

type Busqueda = {
  busqueda?:any,
}


const Pokedex = (prposPokemon: Busqueda) => {
  const [loading, setLoading] = useState(true);
  const [pokemones, setPokemon] = useState<Props>();
  const {busqueda} = prposPokemon; 
  const [buscar, setBuscar] = useState<Busqueda>(busqueda?busqueda:"1");
  const [Url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1" );

  const ChangePokemon = () => {
    setUrl("https://pokeapi.co/api/v2/pokemon/" + buscar)
  }

  const fetchMenu = async () => {
    setLoading(true);
    try {
        const response = await fetch(Url);
        const Poke = await response.json();
        const PokemonApi : Props = {} as Props;
        const{name,abilities,types,sprites}=Poke;

        PokemonApi.pokemonName = name;
        PokemonApi.pokemonImg = sprites.front_default;
        PokemonApi.pokemonAbilities = abilities.map((ability:any) => {
          return ability.ability.name
        })
        PokemonApi.pokemonTypes = types.map((type:any) => {
          return type.type.name
        })

        setPokemon(PokemonApi);

        setLoading(false)
    } catch (error) {
        console.log(Error);
        setLoading(false)
    }
}

useEffect(() => {

  fetchMenu();

  return () => {

  }
}, [Url])
  

  if(loading){
      return <h1 className="Loadingh1">Loading...</h1>
  }

  return (
    <>
      <div className="pokemonh1">
        <h1>Pokedex</h1>
        <h1>{pokemones?.pokemonName}</h1>
      </div>
      <br />
      <div className="Flex">
        <img src={pokemones?.pokemonImg} alt="" />
      </div>
      <div className="Ability">
      <h2>Abilitis: </h2>
        <ol>
          {
            pokemones?.pokemonAbilities.map((abilityName, index) =>{
              return <li  key={index}>{abilityName}</li>
            })
          }
        </ol>
      <h2>Type: </h2>
        <ul>
          {
            pokemones?.pokemonTypes.map((typesName, index) =>{
              return <li  key={index}>{typesName}</li>
            })
          }
        </ul>
      </div>
      <div className="formFlex">
        <form onSubmit={ev => {
            ev.preventDefault();
            setBuscar(ev.target.search.value);
            ChangePokemon();
          }}>
              <h1>Buscar pokemon: Dale doble click</h1>
              <input placeholder="Numero Pokemon" type='number' name='search'/>
              <button type="submit">Añadir</button>
          </form>
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

export default Pokedex