/**
 * Clear localStorage.
 *
 * @return {void}
 */
export const clearStorage = () => {
  if (typeof localStorage === 'undefined') return;

  localStorage.clear();
};

/**
 * Get an item from localStorage.
 *
 * @param {String} key
 * @returns {*}
 */
export const getFromStorage = (key) => {
  if (typeof localStorage === 'undefined') return;

  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(`Error getting ${key} from storage`, err);
  }
};

/**
 * Sets an item in localStorage.
 *
 * @param {String} key
 * @param {*} item
 * @returns {void}
 */
export const setInStorage = (key, item) => {
  if (typeof localStorage === 'undefined') return;

  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    console.error(`Error setting ${key} in storage`, err);
  }
};

/**
 * Removes an item from localStorage.
 *
 * @param {String} key
 * @returns {void}
 */
export const removeFromStorage = (key) => {
  if (typeof localStorage === 'undefined') return;

  try {
    return localStorage.removeItem(key);
  } catch (err) {
    console.error(`Error removing ${key} from storage`, err);
  }
};
