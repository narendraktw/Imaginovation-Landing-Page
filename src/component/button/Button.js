import PropTypes from 'prop-types';
import React from 'react';

import './Button.css';

function Button({ callback, href, text, styleClass }) {
  return (
    <a href={href} className={`button ${styleClass}`} onClick={callback}>
      <div>
        {text}
      </div>
      <span />
    </a>
  )
}

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  href: PropTypes.string,
  styleClass: PropTypes.string,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  callback: () => null,
  href: '#',
  styleClass: '',
}


export default Button;