// js/tournament.js
import { getState, setState } from './state.js';
import { generateFixtures } from './fixtures.js';

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
  
  // Generate initial bracket
  const matches = generateFixtures(state.participants);
  setState({ 
    matches, 
    currentRound: 1,
    tournamentName: state.tournamentName || 'My Tournament'
  });
};

export const advanceWinner = (matchId, winnerId) => {
  const state = getState();
  const matchIndex = state.matches.findIndex(m => m.id === matchId);
  
  if (matchIndex === -1) return;

  // Update match result
  state.matches[matchIndex].winner = winnerId;

  // If not final round, propagate winner to next round
  const currentMatch = state.matches[matchIndex];
  if (currentMatch.round < state.matches.length) { // Simplified logic for demo
    // In a real binary tree, you calculate next match index based on round
    // For this demo, we assume sequential ordering per round
    const nextRoundMatches = state.matches.filter(m => m.round === currentMatch.round + 1);
    // Determine slot (0 or 1) in next match based on current match position
    // This requires more complex tree logic in production
  }

  // Check completion
  const finalMatch = state.matches.filter(m => m.round === Math.max(...state.matches.map(m => m.round)))[0];
  if (finalMatch && finalMatch.winner) {
    state.isComplete = true;
  }

  setState({ matches: state.matches, isComplete: state.isComplete });
};

export const resetTournament = () => {
  const { resetState } = await import('./state.js');
  resetState();
};   
