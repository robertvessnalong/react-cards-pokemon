import { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { pokemonData } from './helpers';

const useFlip = (initalState = true) => {
  const [state, setState] = useState(initalState);
  const toggleState = () => {
    setState((mood) => !mood);
  };
  return [state, toggleState];
};

const useAxios = (url) => {
  const [res, setRes] = useState([]);
  const makeCall = async (pokemon = null) => {
    const response = pokemon
      ? await axios.get(`${url}${pokemon}`)
      : await axios.get(url);
    setRes((data) =>
      pokemon
        ? [...data, pokemonData(response.data)]
        : [...data, { image: response.data.cards[0].image, id: uuid() }]
    );
  };
  return [res, makeCall];
};

export { useFlip, useAxios };
