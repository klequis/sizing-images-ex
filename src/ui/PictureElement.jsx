import React from 'react'
import injectSheet from 'react-jss'
import { breakpoints } from 'ui/breakpoints'

const PictureElement = ({ classes, images }) => {
  return (
    <div className={classes.wrapper}>
      <picture>
        <source srcSet={images[0]} media={`(max-width: ${breakpoints.sm}px)`} />
        <source srcSet={images[1]} media={`(max-width: ${breakpoints.md}px)`} />
        <source srcSet={images[2]} media={`(max-width: ${breakpoints.lg}px)`} />
        <img srcSet={images[2]} className={classes.fluid} alt="MDN" />
      </picture>
    </div>
  )
}

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