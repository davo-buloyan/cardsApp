import { createAction, props } from '@ngrx/store';

export const addCard = createAction(
  '[Cards]: Add Card', props<{
    cardId: number;
  }>()
);

export const deleteCard = createAction(
  '[Cards]: Delete Card',
  props<{
    cardId: number;
  }>()
);

export const sortCards = createAction(
  '[Cards]: Sort Cards',
);

export const moveCard = createAction(
  '[Cards]" Move Card', props<{
    prevuseIndex: number,
    currentIndex: number
  }>()
)
