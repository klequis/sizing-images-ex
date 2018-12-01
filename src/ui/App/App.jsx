import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import injectSheet from 'react-jss'
import ImageXS from 'ui/ImageXS'
import ImageSM from 'ui/ImageSM'
import ImageMD from 'ui/ImageMD'
import PictureElement from 'ui/PictureElement'
import Home from 'ui/Home'
class App extends React.Component {
  state = {
    currBreakpoint: 'xs',
  }

  // componentDidMount() {
    // if (this.props.location.pathname === '/') {
      // this.props.history.push('/xs')
    // }
  // }

  // onChange = (event) => {
  //   const bp = event.target.value
  //   this.setState = {
  //     currBreakpoint: bp,
  //   }
  //   this.props.history.push(`/${bp}`)
  // }

  render() {

    const { classes } = this.props
    console.log('props', this.props)

    return (
      <div className={classes.wrapper}>
        {/* <nav>
          <select onChange={this.onChange}>
            {
               keys.map(k => <option key={k} value={k}>{k}</option>)
            }
          </select>
        </nav> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/xs' component={ImageXS} />
          <Route path='/sm' component={ImageSM} />
          <Route path='/md' component={ImageMD} />
          {/* <Route path='/lg' component={ImageLG} /> */}
        </Switch>

      </div>
    )
  }
}

const styles = {
  wrapper: {
    margin: 20,
  },
}

export default injectSheet(styles)(withRouter(App))