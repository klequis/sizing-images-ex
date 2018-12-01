import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import withBreakpoints from 'ui/withBreakpoints'
import iRiding01 from 'media/riding-md.jpg'

import FileSpec from 'ui/FileSpec'

const Responsive = ({ classes, breakpoint }) => {
  return (
    <div>
      <Text variant='body1'></Text>
      <FileSpec
        size='md'
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
  },
  textSide: {
    flexBasis: '55%',
    padding: '4rem 4rem 2rem 4rem',
  },
})

export default compose(
  withBreakpoints,
  injectSheet(styles)
)(Responsive)



















