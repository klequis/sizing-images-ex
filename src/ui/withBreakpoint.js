import React from 'react'
import withSizes from 'react-sizes'
import { keys as ramdaKeys, values as ramdaValues } from 'ramda'
import { values as values } from 'ui/createBreakpoints'

const getKeyForValue = (width) => {
  const bpKeys = ramdaKeys(values)
  const bpValues = ramdaValues(values)
  let key = ''
  for (let i=0; i<bpValues.length; i++) {
    if (width >= bpValues[i] && width < bpValues[i+1] ) {
      key = bpKeys[i]
      break
    }
  }
  if (key === '') {
    key = bpKeys[bpKeys.length-1]
  }
  return key
}
const withBreakpoint = Component => {
  function WithBreakpoint(props) {
    // console.log(getKeyForValue(props.width))
    return (
      <Component
        breakpoint={getKeyForValue(props.width)}
        {...props}
      />
    )
  }
  const mapSizesToProps = ({ width }) => ({
    width: width
  })
  return withSizes(mapSizesToProps)(WithBreakpoint)
}

export default withBreakpoint
