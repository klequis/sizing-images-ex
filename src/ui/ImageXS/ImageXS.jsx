import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoint from 'ui/withBreakpoint'
// import iRiding from 'media/riding.jpg'
import iRiding01 from 'media/riding-xs.jpg'
// import iRiding02 from 'media/riding-xs.compress50p.jpg'

import FileSpec from 'ui/FileSpec'

const Responsive = ({ classes, breakpoint }) => {

  // const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return (
    <div>
      <Text variant='body1'></Text>
      <FileSpec
        size='xs'
      />
      <img src={iRiding01} alt='man riding horse' />
    </div>
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



















