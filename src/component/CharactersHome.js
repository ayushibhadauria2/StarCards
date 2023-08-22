import React, { useEffect } from "react";
import CharacterList from "./CharacterList/CharacterList";
import { useDispatch, useSelector } from "react-redux";
import { setCharacter } from "../action/characterAction";

import ShimmerList from "./Shimmer/ShimmerList";

const CharactersHome = () => {
  const api_url = "https://swapi.dev/api/people";
  const dispatch = useDispatch();
  const filteredCharacters = useSelector(
    (state) => state.characterReducer.filteredCharacter
  );

  const fetchData = async () => {
    const response = await fetch(api_url);
    const data = await response?.json();
    const list = data?.results;
    dispatch(setCharacter(list));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      { filteredCharacters.length > 0 ? <CharacterList /> : <ShimmerList />}
    </div>  
  );
};

export default CharactersHome;
