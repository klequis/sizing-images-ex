import React from 'react'
import iRidingXS from 'media/riding-xs.jpg'
import iRidingSM from 'media/riding-sm.jpg'
import iRidingMD from 'media/riding-md.jpg'
import PictureElement from 'ui/PictureElement'

const Home = (props) => {
  return (
    <PictureElement
      images={[iRidingXS, iRidingSM, iRidingMD]}
    />
  )
}

export default Home