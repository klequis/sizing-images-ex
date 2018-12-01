import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
// import iRiding from 'media/riding.jpg'
import iRiding from 'media/riding.jpg'

const image = (
  <ResponsiveImage  src={iRiding} alt='carl riding charmeur' />
)
const text = (
  <div>
    <Text variant='subtitle2'>Once Upon A Time</Text>
    <Text variant='h2'>Dressage Trainer & Instructor</Text>
    <Text variant='body1'>I fell in love with horses when I was 10 years old.</Text>
  </div>
)

const Responsive = ({ classes, breakpoint }) => {

  const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return small
    ? (
        <section className={classes.wrapper}>
          <div className={classes.textSide}>
            { text }
          </div>
          <div className={classes.imageSide}>
            { image }
          </div>
        </section>
      )
    : (
        <section className={classes.wrapper}>
          <div className={classes.imageSide}>
            { image }
          </div>
          <div className={classes.textSide}>
            { text }
          </div>
        </section>
      )
}


const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  imageSide: {
    // backgroundColor: 'rgb(230, 230, 230)',
    flexBasis: '45%',
    padding: '0 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: `url(${iRiding})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'contain',
  },
  textSide: {
    flexBasis: '55%',
    padding: '4rem 4rem 2rem 4rem',
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Responsive)



















