// js/render.js
import { getState } from './state.js';
import { addParticipant, removeParticipant, startTournament, advanceWinner } from './tournament.js';

const dom = {
  participantInput: document.getElementById('participant-input'),
  addBtn: document.getElementById('add-btn'),
  participantList: document.getElementById('participant-list'),
  startBtn: document.getElementById('start-btn'),
  bracketContainer: document.getElementById('bracket-container'),
  setupSection: document.getElementById('setup-section'),
  bracketSection: document.getElementById('bracket-section')
};

export const initRender = () => {
  renderSetup();
  
  dom.addBtn.addEventListener('click', () => {
    addParticipant(dom.participantInput.value);
    dom.participantInput.value = '';
    renderParticipantList();
  });

  dom.startBtn.addEventListener('click', () => {
    startTournament();
    renderBracket();
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
  dom.participantList.innerHTML = state.participants.map((p, i) => `
    <li>
      ${p} <button class="remove-btn" data-index="${i}">×</button>
    </li>
  `).join('');

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      removeParticipant(parseInt(e.target.dataset.index));
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
  
  state.matches.forEach(match => {
    if (!rounds[match.round]) rounds[match.round] = [];
    rounds[match.round].push(match);
  });

  let html = '<div class="bracket">';
  Object.keys(rounds).sort().forEach(roundNum => {
    html += `<div class="round"><h3>Round ${roundNum}</h3><div class="matches">`;
    rounds[roundNum].forEach(match => {
      html += `
        <div class="match" data-id="${match.id}">
          <div class="player ${match.winner === match.p1 ? 'winner' : ''}" 
               onclick="window.handleWinner(${match.id}, '${match.p1}')">
            ${match.p1}
          </div>
          <div class="player ${match.winner === match.p2 ? 'winner' : ''}" 
               onclick="window.handleWinner(${match.id}, '${match.p2}')">
            ${match.p2}
          </div>
        </div>
      `;
    });
    html += '</div></div>';
  });
  html += '</div>';
  
  dom.bracketContainer.innerHTML = html;
};

// Expose handler to global scope for inline onclick
window.handleWinner = (matchId, winner) => {
  advanceWinner(matchId, winner);
};   
