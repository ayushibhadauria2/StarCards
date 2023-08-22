import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../../action/characterAction";
import "./CharacterList.css";

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characterReducer.characters);
  
  const filteredCharacters = useSelector(
    (state) => state.characterReducer.filteredCharacter
  );

  const notDisplyedCharacter = characters.filter((character) => {
    return !filteredCharacters.find((filteredObj) => {
      return (
        character.name === filteredObj.name
      );
    });
  });

  function addCharacterCard() {
    const randomCharacter =
    notDisplyedCharacter[Math.floor(Math.random() * notDisplyedCharacter.length)];

    dispatch(addCharacter(randomCharacter));
  }

  const characterListLength = filteredCharacters.length;
  return (
    <div className="character-list-container">
      <div className="character-list">
        {filteredCharacters?.map((character, i) => {
          return (
            <CharacterCard
              key={i}
              character={character}
              characterListLength={characterListLength}
            />
          );
        })}
      </div>
      <div className="add-button-container">
        {!(filteredCharacters.length === characters.length) ?  (
          <button className="add-button" onClick={addCharacterCard}>
            Add Character
          </button>
        ) : (
          <button className="add-button-diabled" disabled>
            Add Character
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterList;
