import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const ResponsiveImage = ({ alt, classes, src }) => {
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