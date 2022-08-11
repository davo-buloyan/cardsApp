import { createReducer, on } from '@ngrx/store';

import { addCard, deleteCard, moveCard, sortCards } from './cards.actions';

export interface ICardsState {
  loading: boolean;
  cards: number[];
}

export const initialState: ICardsState = {
  loading: false,
  cards: [1, 2, 3],
};

export const cardsReducer = createReducer(
  initialState,
  on(addCard, (state, action) => ({
    ...state,
    cards: [...state.cards, action.cardId],
  })),
  on(deleteCard, (state, action) => {
    return {
      ...state,
      cards: state.cards.filter((card) => card != action.cardId),
    };
  }),
  on(sortCards, (state) => ({
    ...state,
    cards: [...state.cards.sort((a, b) => a - b)],
  })),
  on(moveCard, (state, action) => ({
    ...state,
    cards: moveItemInArray(state.cards, action.prevuseIndex, action.currentIndex)
  })),
);

function moveItemInArray(arr: number[], fromInd: number, toInd: number) {
  const clonedArr = [...arr];

  const item = clonedArr[fromInd];

  clonedArr.splice(fromInd, 1);

  clonedArr.splice(toInd, 0, item);

  return clonedArr;
}
