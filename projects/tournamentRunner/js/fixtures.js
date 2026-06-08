export const generateFixtures = (participants) => {
  const players = [...participants];
  if (players.length % 2 !== 0) {
    players.push('BYE');
  }

  const matches = [];
  for (let i = 0; i < players.length; i += 2) {
    matches.push({
      id: i / 2,
      round: 1,
      p1: players[i],
      p2: players[i + 1],
      winner: null
    });
  }

  matches.forEach(m => {
    if (m.p1 === 'BYE') m.winner = m.p2;
    else if (m.p2 === 'BYE') m.winner = m.p1;
  });

  return matches;
};

export const generateNextRound = (winners, prevRound) => {
  return winners.reduce((acc, _, i, arr) => {
    if (i % 2 === 0) {
      const p1 = arr[i];
      const p2 = arr[i + 1] || 'BYE';
      const match = {
        id: Date.now() + acc.length,
        round: prevRound + 1,
        p1,
        p2,
        winner: null
      };
      if (match.p1 === 'BYE') match.winner = match.p2;
      else if (match.p2 === 'BYE') match.winner = match.p1;
      acc.push(match);
    }
    return acc;
  }, []);
};
