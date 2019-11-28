import React from 'react';
import PropTypes from 'prop-types';

const ReplyFill = (props) => {
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
      <path d="M11.079 13.9l4.568-3.281a.719.719 0 000-1.238L11.079 6.1A.716.716 0 0010 6.719V8c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z" />
    </svg>
  );
};

ReplyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReplyFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ReplyFill;
