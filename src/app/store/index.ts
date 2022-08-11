import { IState } from "@app/app.module";
import { createSelector } from "@ngrx/store";
import { ICardsState } from "./cards/cards.reducer";

// (state) => state.cards.cards

const selectCardState = (state: IState) => state.cards;

export const selectCards = createSelector(selectCardState, (state) => state.cards);

export const loadingCards = createSelector(selectCardState, (state) => state.loading);

