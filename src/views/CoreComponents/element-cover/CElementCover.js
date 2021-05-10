import React, {  createRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSpinner from '../spinner/CSpinner'
const CElementCover = props => {

  const {
    className,
    children,
    innerRef,
    boundaries,
    opacity,
    ...attributes
  } = props

  const [customBoundaries] = useState({})
  const ref = createRef(null)
  innerRef && innerRef(ref)
  const classes = classNames(className)

  const containerCoords = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...customBoundaries
  }

  const coverStyles = {
    ...containerCoords,
    position: 'absolute',
    backgroundColor: `rgb(255,255,255,${opacity})`
  }

  return (
    <div 
      className={classes} 
      style={coverStyles} 
      {...attributes} 
      ref={ref}
    >
      { children ||  
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)'
        }}>       
          <CSpinner grow size="lg" color="primary"/>
        </div>
      }
    </div>
  )
}

CElementCover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  boundaries: PropTypes.array,
  opacity: PropTypes.number
};

CElementCover.defaultProps = {
  opacity: 0.4
};

export default CElementCover