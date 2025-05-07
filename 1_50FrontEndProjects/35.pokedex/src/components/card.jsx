import { useEffect, useState } from 'react';
import './card.css';

const URL = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonCount = 1025;
const color = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const pokemonsData = [
  {
    id: 2,
    name: 'ivysaur',
    sprit: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
      front_shiny_female: null,
    },
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
  },
];

const Card = () => {
  const [pokemons, setPokemons] = useState([]);

  function createPokemonData(id, name, types, sprites) {
    const avatarURL = sprites.front_shiny;
    const type = types[0].type.name;
    const obj = {
      id: id,
      name: name,
      avatar: avatarURL,
      type: type,
    };
    return obj;
  }

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        for (let i = 1; i <= pokemonCount; i++) {
          const response = await fetch(`${URL}/${i}`);
          if (!response.ok) {
            return new Error('error', response.status);
          }
          const data = await response.json();
          const { id, name, types, sprites } = data;
          const obj = createPokemonData(id, name, types, sprites);

          setPokemons((prev) => {
            if (prev.find((item) => item.id === obj.id)) return prev;
            return [...prev, obj];
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <>
      {pokemons.map(({ id, name, avatar, type }) => {
        return (
          <div
            className='card'
            key={id}
            style={{ backgroundColor: color[type] }}
          >
            <div className='avatar'>
              <img src={avatar} alt={name} />
            </div>
            <p className='id'>#{String(id).padStart(3, '0')}</p>
            <h3 className='name'>{name}</h3>
            <p className='type'>Type: {type}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
