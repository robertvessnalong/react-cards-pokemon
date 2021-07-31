import React from 'react';
import backOfCard from './back.png';
import { useFlip } from './hooks';
import './PlayingCard.css';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, toggleFlip] = useFlip();
  return (
    <img
      src={isFlipped ? front : back}
      alt='playing card'
      onClick={toggleFlip}
      className='PlayingCard Card'
    />
  );
}

export default PlayingCard;
