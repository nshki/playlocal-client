import React from 'react';
import moment from 'moment';
import haversine from 'haversine';
import IconButton from '../components/IconButton';

/**
 * Given a time string, outputs a string describing how far away that is from
 * now.
 *
 * @param {String} timeStr
 * @returns {String}
 */
export const timeFromNow = (timeStr) => {
  const format = 'YYYY-MM-DD HH:mm:ss';
  return moment(timeStr, format).fromNow().replace('in', '').trim();
};

/**
 * Given two sets of coordinates, outputs a string describing how far away they
 * are from each other.
 *
 * @param {Object} start { lat: Float, lng: Float }
 * @param {Object} end { lat: Float, lng: Float }
 * @returns {String}
 */
export const distanceBetween = (start, end) => {
  const p1 = { latitude: start.lat, longitude: start.lng };
  const p2 = { latitude: end.lat, longitude: end.lng };
  const distance = haversine(p1, p2, { unit: 'mile' });
  return `${Math.round(distance * 10) / 10} mi`;
};

/**
 * Given a signal, generates the button to view the corresponding Twitter page.
 * Returns null if Twitter is not associated.
 *
 * @param {Object} signal
 * @returns {JSX | null}
 */
export const twitterButton = (signal) => {
  if (!signal.twitterUsername) return null;

  const onClick = () => {
    window.open(
      `https://twitter.com/${signal.twitterUsername}`,
      '_blank'
    );
  };

  return (
    <IconButton onClick={onClick} type="twitter">
      Contact via Twitter
    </IconButton>
  );
};

/**
 * Given a signal, generates the button to view the corresponding Discord user.
 * Returns null if Discord is not associated.
 *
 * @param {Object} signal
 * @returns {JSX | null}
 */
export const discordButton = (signal) => {
  if (!signal.discordUsername) return null;

  const onClick = () => {
  };

  return (
    <IconButton onClick={onClick} type="discord">
      Contact via Discord
    </IconButton>
  );
};
