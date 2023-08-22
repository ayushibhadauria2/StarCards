import { SET_CHARACTER, ADD_CHARACTER, REMOVE_CHARACTER } from "./actionTypes";

export const setCharacter = (data) => {
  return {
    type: SET_CHARACTER,
    payload: data,
  };
};

export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
};

export const removeCharacter = (id) => {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
};
