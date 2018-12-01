import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import withBreakpoints from 'ui/withBreakpoints'

const tmp = [
  {
    breakpoint: 'xs',
    image: 'image1'
  },
  {
    breakpoint: 'sm',
    image: 'image1'
  },
]

const ResponsiveImage = ({ alt, classes, images, breakpoint }) => {
  return (
    <img src={src} alt={alt}  className={classes.imgFluid}/>
  )
}

const styles = {
  imgFluid: {
    display: 'block',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}

export default injectSheet(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}