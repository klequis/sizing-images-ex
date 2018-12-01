import React from 'react'
import withThemeProvider from 'ui/withThemeProvider'
import App from './App'
import injectSheet from 'react-jss'
import { compose } from 'recompose'


const styles = theme => ({
  // wrapper: {
  //   boxSizing: 'border-box',
  //   // fontSize: 18,
  //   line-height: 1;
  //   font-family: "Source Sans Pro", Helvetica, sans-serif;
  //   font-size: 1rem;
  //   [theme.breakpoints.up('xs')]: {
  //     fontSize: 10,
  //     color: 'red',
  //     minWidth: 320,
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     fontSize: 10,
  //     color: 'green',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: 11,
  //     color: 'blue',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     fontSize: 12,
  //     color: 'purple',
  //   },
  //   [theme.breakpoints.up('xl')]: {
  //     fontSize: 14,
  //     color: 'orange',
  //   },

  // },


})

const AppWrapper = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <App />
    </div>
  )
}

export default compose(
  withThemeProvider,
  injectSheet(styles)
)(AppWrapper)

// export default AppWrapper
