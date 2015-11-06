import makeStore from './src/store';
import startServer from './src/server';
import shuffle from './src/shuffle';

export const store = makeStore();
startServer(store);

let entries = require('./entries.json');
let shuffledEntries = shuffle(entries);

store.dispatch({
  type: 'SET_ENTRIES',
  entries: shuffledEntries
});
store.dispatch({type: 'NEXT'});
