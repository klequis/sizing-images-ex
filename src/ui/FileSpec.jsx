import React from 'react'
import { imageData } from 'ui/imageData.js'
const FileSpec = ({ size }) => {
  return (
    <ul>
      <li>file size: {imageData[size].fileSize} px</li>
      <li>width: {imageData[size].width}</li>
      <li>height: {imageData[size].height}</li>
      <li>file name: {imageData[size].fileName}</li>
    </ul>
  )

}

export default FileSpec