import { getState } from './state.js';
import { addParticipant, removeParticipant, startTournament, advanceWinner, resetTournament } from './tournament.js';

const esc = (s) => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const dom = {
  participantInput: document.getElementById('participant-input'),
  addBtn: document.getElementById('add-btn'),
  participantList: document.getElementById('participant-list'),
  startBtn: document.getElementById('start-btn'),
  bracketContainer: document.getElementById('bracket-container'),
  setupSection: document.getElementById('setup-section'),
  bracketSection: document.getElementById('bracket-section'),
  resetBtn: document.getElementById('reset-btn')
};

export const initRender = () => {
  const saved = getState();
  if (saved.matches.length > 0) {
    renderBracket();
  } else {
    renderSetup();
  }

  dom.addBtn.addEventListener('click', () => {
    addParticipant(dom.participantInput.value);
    dom.participantInput.value = '';
    renderParticipantList();
  });

  dom.participantInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addParticipant(dom.participantInput.value);
      dom.participantInput.value = '';
      renderParticipantList();
    }
  });

  dom.startBtn.addEventListener('click', startTournament);

  dom.resetBtn.addEventListener('click', resetTournament);

  dom.bracketContainer.addEventListener('click', (e) => {
    const playerEl = e.target.closest('.player');
    if (!playerEl || playerEl.classList.contains('bye')) return;
    const matchEl = playerEl.closest('.match');
    if (!matchEl || matchEl.classList.contains('decided')) return;
    advanceWinner(parseInt(matchEl.dataset.id), playerEl.dataset.player);
  });

  window.addEventListener('stateChanged', () => {
    const state = getState();
    if (state.matches.length > 0) {
      renderBracket();
    } else {
      renderSetup();
    }
  });
};

const renderParticipantList = () => {
  const state = getState();
  dom.participantList.innerHTML = state.participants
    .map((p, i) => `<li>${esc(p)} <button class="remove-btn" data-index="${i}">×</button></li>`)
    .join('');

  dom.participantList.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeParticipant(parseInt(btn.dataset.index));
      renderParticipantList();
    });
  });
};

const renderSetup = () => {
  dom.setupSection.style.display = 'block';
  dom.bracketSection.style.display = 'none';
  renderParticipantList();
};

const renderBracket = () => {
  dom.setupSection.style.display = 'none';
  dom.bracketSection.style.display = 'block';

  const state = getState();
  const rounds = {};
  state.matches.forEach(m => {
    (rounds[m.round] || (rounds[m.round] = [])).push(m);
  });

  let html = '<div class="bracket">';
  Object.keys(rounds).sort().forEach(roundNum => {
    html += `<div class="round"><h3>Round ${roundNum}</h3><div class="matches">`;
    rounds[roundNum].forEach(m => {
      const decided = m.winner ? ' decided' : '';
      html += `<div class="match${decided}" data-id="${m.id}">`;
      html += playerHtml(m, 'p1');
      html += playerHtml(m, 'p2');
      html += '</div>';
    });
    html += '</div></div>';
  });
  html += '</div>';

  if (state.isComplete) {
    const finalRound = Math.max(...state.matches.map(m => m.round));
    const finalMatch = state.matches.find(m => m.round === finalRound);
    if (finalMatch && finalMatch.winner) {
      html += `<div class="champion">🏆 Champion: ${esc(finalMatch.winner)}</div>`;
    }
  }

  dom.bracketContainer.innerHTML = html;
};

const playerHtml = (match, key) => {
  const name = match[key];
  const winner = match.winner === name ? ' winner' : '';
  const bye = name === 'BYE' ? ' bye' : '';
  return `<div class="player${winner}${bye}" data-player="${esc(name)}">${bye ? '—' : esc(name)}</div>`;
};
