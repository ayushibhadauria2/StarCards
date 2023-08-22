import React, { useState, useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { removeCharacter } from "../../action/characterAction";
import "./CharacterCard.css";

const CharacterCard = ({ character, characterListLength }) => {
  const dispatch = useDispatch();
  const [filmData, setFilmData] = useState([]);

  async function getFilmList(filmUrlList) {
    
    const filmListName = await Promise.all(
      filmUrlList?.map(async (filmUrl) => {
        const response = await fetch(filmUrl,{ method: "GET",

          headers: { accept: "application/json" }, });
        const filmNameJSON = await response?.json();
        return filmNameJSON?.title;
      })
    );
    return filmListName;
  }

  const fetchData = async () => {
    const data = await getFilmList(character?.films);
    setFilmData(data);
  };

  useEffect(() => {
    fetchData();
  }, [character]);

  const handleRemove = () => {
    dispatch(removeCharacter(character.name));
  };

  return (
    <div className="character-card">
      {characterListLength > 3 && (
        <button onClick={handleRemove}>
          <GrFormClose />
        </button>
      )}

      <div className="character-header">
        <h2 className="character-name">{character.name}</h2>
      </div>
      <div className="character-details">
        <p className="character-height">Height: {character.height} cm</p>
        <div className="film-list">
          <p className="films-label">Films:</p>
          <ul className="film-items">
            {filmData?.map((film, index) => (
              <li key={index} className="film-item">
                {film}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
