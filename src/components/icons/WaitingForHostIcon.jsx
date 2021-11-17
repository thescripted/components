import React from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../helpers';

/**
 * Waiting for host SVG Icon
 *
 * @param {object} props  Data passed to the component
 * @param {string} props.ariaLabel  Aria label for accessibility
 * @param {string} props.className  Additional className for the component
 * @param {number} props.size  Width and height of the icon
 * @param {object} props.style  Inline style object for the component
 * @returns {object} JSX of the icon
 *
 */
export default function WaitingForHostIcon({
  ariaLabel, className, size, style,
}) {
  const [cssClasses] = webexComponentClasses('waiting-for-host-icon', className);

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={cssClasses} style={style} aria-label={ariaLabel}>
      <g id="rocket-avatar-120">
        <path id="apply-style-here" d="M49.6445 30.1C49.6445 23.9 53.5445 18.6 56.4445 14.8C58.0445 12.7 61.1445 12.7 62.7445 14.8C65.6445 18.6 69.5445 23.9 69.5445 30.1M39.6445 48.1V43.1C39.6445 39.3 41.6445 36.3 43.1445 34.6C43.9445 33.7 45.3445 33.7 46.1445 34.6C47.6445 36.3 49.6445 39.3 49.6445 43.1V43.8C49.6445 45.9 48.8445 48 47.3445 49.5L34.9445 61.8C31.5445 65.2 29.6445 69.8 29.6445 74.5V77C29.6445 78.1 30.5445 79 31.6445 79H47.6445C48.7445 79 49.6445 78.1 49.6445 77V56M79.6445 48.1V43.1C79.6445 39.3 77.6445 36.3 76.1445 34.6C75.3445 33.7 73.9445 33.7 73.1445 34.6C71.6445 36.3 69.6445 39.3 69.6445 43.1V43.8C69.6445 45.9 70.4445 48 71.9445 49.5L84.4445 61.8C87.8445 65.2 89.7445 69.8 89.7445 74.5V77C89.7445 78.1 88.8445 79 87.7445 79H71.7445C70.6445 79 69.7445 78.1 69.7445 77V56M35.6445 107.1C35.6445 102.7 39.2445 99.1 43.6445 99.1C43.6445 94.7 47.2445 91.1 51.6445 91.1C51.6445 86.7 55.2445 83.1 59.6445 83.1C64.0445 83.1 67.6445 86.7 67.6445 91.1C72.0445 91.1 75.6445 94.7 75.6445 99.1C80.0445 99.1 83.6445 102.7 83.6445 107.1M63.6445 37.1C63.6445 39.3091 61.8537 41.1 59.6445 41.1C57.4354 41.1 55.6445 39.3091 55.6445 37.1C55.6445 34.8908 57.4354 33.1 59.6445 33.1C61.8537 33.1 63.6445 34.8908 63.6445 37.1Z" stroke="url(#paint0_linear_3181:123911)" strokeWidth="1.5625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_3181:123911" x1="59.6945" y1="13.225" x2="59.6945" y2="107.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#93C437" />
          <stop offset="1" stopColor="#279BE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

WaitingForHostIcon.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.shape(),
};

WaitingForHostIcon.defaultProps = {
  ariaLabel: undefined,
  className: undefined,
  size: 120,
  style: undefined,
};
