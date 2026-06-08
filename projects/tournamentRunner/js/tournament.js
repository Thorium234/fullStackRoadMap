import { getState, setState, resetState } from './state.js';
import { generateFixtures, generateNextRound } from './fixtures.js';

export const addParticipant = (name) => {
  const state = getState();
  if (!name.trim()) return;
  state.participants.push(name.trim());
  setState({ participants: state.participants });
};

export const removeParticipant = (index) => {
  const state = getState();
  state.participants.splice(index, 1);
  setState({ participants: state.participants });
};

export const startTournament = () => {
  const state = getState();
  if (state.participants.length < 2) {
    alert('Need at least 2 participants');
    return;
  }
  const matches = generateFixtures(state.participants);
  setState({
    matches,
    currentRound: 1,
    isComplete: false
  });
};

export const advanceWinner = (matchId, winner) => {
  const state = getState();
  const match = state.matches.find(m => m.id === matchId);
  if (!match || match.winner) return;

  match.winner = winner;

  const roundMatches = state.matches.filter(m => m.round === match.round);
  const allDone = roundMatches.every(m => m.winner !== null);

  if (allDone) {
    if (roundMatches.length === 1) {
      state.isComplete = true;
    } else {
      const winners = roundMatches.map(m => m.winner);
      const next = generateNextRound(winners, match.round);
      state.matches.push(...next);
    }
  }

  setState({ matches: state.matches, isComplete: state.isComplete });
};

export const resetTournament = () => {
  resetState();
};
