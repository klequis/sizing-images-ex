import React from 'react'
import injectSheet from 'react-jss'
import iRidingXS from 'media/riding-xs.jpg'
import iRidingSM from 'media/riding-sm.jpg'
import iRidingMD from 'media/riding-md.jpg'
import ResponsiveImage from 'ui/ResponsiveImage'

const PictureElement = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <picture>
        <source srcSet={iRidingXS} media="(max-width: 360px)" />
        <source srcSet={iRidingSM} media="(max-width: 736px)" />
        <img srcSet={iRidingMD} className={classes.fluid} alt="MDN" />
      </picture>
    </div>
  )
}

// <ResponsiveImage src={iRidingMD} alt="MDN" />

const styles = theme => ({
  wrapper: {
    width: '80%',
    backgroundColor: 'red',
  },
  fluid: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
})

export default injectSheet(styles)(PictureElement)