import React from 'react';
import PropTypes from 'prop-types';

const TagFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M4 3a1 1 0 00-1 1v4.586a1 1 0 00.293.707l7 7a1 1 0 001.414 0l4.586-4.586a1 1 0 000-1.414l-7-7A1 1 0 008.586 3H4zm4 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

TagFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TagFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TagFill;
