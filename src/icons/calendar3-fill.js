import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar3Fill = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0z" />
      <path
        fillRule="evenodd"
        d="M0 3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3z"
      />
    </svg>
  );
});

Calendar3Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar3Fill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Calendar3Fill;
