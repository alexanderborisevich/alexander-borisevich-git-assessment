// main.js

import { getTimestamp, capitalize, delay } from './utils.js';

async function main() {
  console.log('App started at:', getTimestamp());

  const name = 'alex';
  console.log('User name:', capitalize(name));

  const surname = 'b';
  console.log('Surname:', capitalize(surname));

  console.log('Simulating async work...');
  await delay(3000);

  console.log('Still working...');
  await delay(3000);

  console.log('Done at:', getTimestamp());
}

// Run application
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
