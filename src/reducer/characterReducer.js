import {
  SET_CHARACTER,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
} from "../action/actionTypes";

const initialState = {
  characters: [],
  filteredCharacter: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER:
      return {
        ...state,
        characters: action.payload,
        filteredCharacter: state.characters.slice(0, 3),
      };

    case ADD_CHARACTER:
      return {
        ...state,
        filteredCharacter: [...state.filteredCharacter, action.payload],
      };

    case REMOVE_CHARACTER:
      const removedCharacter = state.filteredCharacter.filter(
        (character) => character.name !== action.payload
      );

      return {
        ...state,
        filteredCharacter: removedCharacter,
      };

    default:
      return state;
  }
};

export default characterReducer;
