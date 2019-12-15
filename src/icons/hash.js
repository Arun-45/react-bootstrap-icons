import React from 'react';
import PropTypes from 'prop-types';

const Hash = (props) => {
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
      <path d="M10.39 14.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304c.008-.04.016-.117.016-.164a.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H9.617l.477-2.304c.008-.04.015-.117.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L8.53 7.484H7.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H6.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H8.859l.532-2.563z" />
    </svg>
  );
};

Hash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hash.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Hash;