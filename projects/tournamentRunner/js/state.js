// js/state.js
import { saveState, loadState } from './storage.js';

const initialState = {
  tournamentName: '',
  participants: [], // Array of strings (names)
  matches: [],      // Array of match objects { id, round, p1, p2, winner }
  currentRound: 1,
  isComplete: false
};

let state = { ...initialState };

export const getState = () => state;

export const setState = (newState) => {
  state = { ...state, ...newState };
  saveState(state);
  // Dispatch event for UI updates if needed
  window.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
};

export const resetState = () => {
  state = { ...initialState };
  saveState(state);
  window.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
};

// Load from local storage on init
export const initState = () => {
  const saved = loadState();
  if (saved) {
    state = saved;
  }
  return state;
};   
