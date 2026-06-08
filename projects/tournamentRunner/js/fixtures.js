// js/fixtures.js
export const generateFixtures = (participants) => {
  // Ensure power of 2 for simple bracket (add byes if needed in production)
  let count = participants.length;
  let rounds = Math.ceil(Math.log2(count));
  let matches = [];
  let matchId = 0;

  // Round 1
  let currentRoundPlayers = [...participants];
  
  for (let r = 1; r <= rounds; r++) {
    let nextRoundPlayers = [];
    for (let i = 0; i < currentRoundPlayers.length; i += 2) {
      let p1 = currentRoundPlayers[i];
      let p2 = currentRoundPlayers[i + 1] || 'BYE';
      
      matches.push({
        id: matchId++,
        round: r,
        p1: p1,
        p2: p2,
        winner: null
      });
      
      // Placeholder for next round
      nextRoundPlayers.push(`Winner of Match ${matchId - 1}`);
    }
    currentRoundPlayers = nextRoundPlayers;
  }

  return matches;
};   
