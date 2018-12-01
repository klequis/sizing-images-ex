import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'ui/Text'
import ResponsiveImage from 'ui/ResponsiveImage'
import withBreakpoints from 'ui/withBreakpoints'
// import iRiding from 'media/riding.jpg'
import iRiding01 from 'media/riding.scale50p.jpg'
import iRiding02 from 'media/riding.compress75p.jpg'
import iRiding03 from 'media/riding.scale50p.compress75p.jpg'
import iRiding04 from 'media/riding.scale50p.compress75p-again.jpg'
import iRiding05 from 'media/riding-cropped.scaled50p.compressed75p.jpg'

import FileSpec from 'ui/FileSpec'

const Responsive = ({ classes, breakpoint }) => {

  // const small = (breakpoint === 'xs' || breakpoint === 'sm')

  return (
    <div>

      <Text variant='h2'>Original</Text>
      <Text variant='body1'>This file has not been rendered on the page because it is so large.</Text>
      <FileSpec
        format='jpg'
        imageSize='1667 x 1004'
        fileSize='618.3'
        fileName='riding.jpg'
      />
      <hr/>

      <Text variant='h2'>scaled 50%</Text>
      <FileSpec
        format='jpg'
        imageSize='834 x 502'
        fileSize='183.5'
        fileName='riding.scale50p.jpg'

      />
      <img src={iRiding01} alt='carl riding' />
      <hr/>

      <Text variant='h2'>compressed 50%</Text>
      <FileSpec
        format='jpg'
        imageSize='834 x 502'
        fileSize='183.5'
        fileName='riding.compress75p.jpg'
      />
      <img src={iRiding02} alt='carl riding' />
      <hr/>

      <Text variant='h2'>scaled -50%, compress 75%</Text>
      <FileSpec
        format='jpg'
        imageSize='834 x 502'
        fileSize='100.4'
        fileName='riding.scale50p.compress75p.jpg'
      />
      <img src={iRiding03} alt='carl riding' />
      <hr/>

      <Text variant='h2'>scaled -50%, compress 75% (again)</Text>
      <Text variant='body1'>This file was scalled 50%, compressed 75% & then compressed 75% again. The file size stys the same.</Text>
      <FileSpec
        format='jpg'
        imageSize='834 x 502'
        fileSize='100.4'
        fileName='riding.scale50p.compress75p-again.jpg'
      />
      <img src={iRiding04} alt='carl riding' />
      <hr/>

      <Text variant='h2'>scaled -50%, compress 75%</Text>
      <FileSpec
        format='jpg'
        cropped='yes'
        imageSize='834 x 502'
        fileSize='100.4'
        fileName='riding-cropped.scaled50p.compressed75p.jpg'
      />
      <img src={iRiding05} alt='carl riding' />
      <hr/>
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
  withBreakpoints,
  injectSheet(styles)
)(Responsive)



















