import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FilesAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M3 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z"
      />
      <path d="M13 3V2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
    </svg>
  );
});

FilesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FilesAlt.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FilesAlt;
