import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import style from './styles';
const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    let initialCards = [...characters, ...characters];
    initialCards = shuffleCards(initialCards);
    setCards(initialCards);
    setFlippedCards([]);
    setAttempts(0);
    setMatches(0);
  };

  const shuffleCards = cardsArray => {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
    return cardsArray;
  };

  const handleCardPress = index => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      setAttempts(attempts + 1);
      setTimeout(() => checkForMatch(), 1000);
    }
  };

  const checkForMatch = () => {
    const [card1, card2] = flippedCards;
    if (cards[card1] === cards[card2]) {
      setMatches(matches + 1);
      setFlippedCards([]);
      if (matches + 1 === characters.length) {
        Alert.alert('Congratulations!', 'You have won the game!');
      }
    } else {
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>Memory Game</Text>
      <Text style={style.info}>Attempts: {attempts}</Text>
      <Text style={style.info}>Matches: {matches}</Text>
      <View style={style.grid}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={[
              style.card,
              flippedCards.includes(index) && style.flipped,
            ]}
            onPress={() => handleCardPress(index)}>
            {flippedCards.includes(index) ? (
              <Text style={style.cardText}>{card}</Text>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={style.button} onPress={initializeGame}>
        <Text style={style.buttonText}>Restart Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
