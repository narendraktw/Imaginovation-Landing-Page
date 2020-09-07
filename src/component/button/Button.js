import PropTypes from 'prop-types';
import React from 'react';

import './Button.css';

function Button({ href, text, styleClass, ...rest }) {
  console.log({...rest})
  return (
    
    <a {...rest} href={href} className={`button ${styleClass}`} >
      <div>
        {text}
      </div>
      <span />
    </a>
  )

}

Button.propTypes = {
  href: PropTypes.string,
  styleClass: PropTypes.string,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  href: '#',
  styleClass: '',
}


export default React.memo(Button);