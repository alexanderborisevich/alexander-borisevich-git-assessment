// utils.js

/**
 * Returns current timestamp in ISO format
 */
export function getTimestamp() {
  return new Date().toISOString();
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(text) {
  if (typeof text !== 'string' || text.length === 0) {
    return text;
  }
  return text[0].toUpperCase() + text.slice(1);
}

/**
 * Simulates async operation (e.g., API call)
 */
export async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
