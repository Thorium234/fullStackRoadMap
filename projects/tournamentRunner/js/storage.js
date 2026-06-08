// js/storage.js
const STORAGE_KEY = 'tournament_runner_data';

export const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
};

export const loadState = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to load state:', e);
    return null;
  }
};

export const clearStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};   
