import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const CLink = props => {

  const {
    className,
    innerRef,
    active,
    href,
    onClick,
    disabled,
    ...rest
  } = props

  const to = rest ? rest.to : null
  const click = e => {
    if ((!href && !to) || href === '#') {
      e.preventDefault()
    }
    !disabled && onClick && onClick(e)
  }

  const classes = classNames(
    active && 'active',
    disabled && 'disabled',
    className
  )

  return to ? (
    <NavLink
      {...rest}
      className={classes}
      onClick={click}
      ref={innerRef}
    />
  ) : (
    <a href={href || '#'}
      className={{classes}}
      rel={rest.target === '_blank' ? 'noopener norefferer' : null}
      {...rest}
      onClick={click} 
      ref={innerRef}
    />
  )
}

CLink.propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ...NavLink.propTypes,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

export default CLink
