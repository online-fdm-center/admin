import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'

import "../styles/App.css"

import AuthPage from "./AuthPage"
import NavBar from './NavBar'

const mapStateToProps = ({auth}) => ({
  isAuth: auth.token !== null,
})

class PrivateRouteUnconnected extends Component {
  render(){
    const { component: Component, isAuth, ...rest } = this.props
    console.log(this.props.isAuth)
    return <Route
      {...rest}
      render={
        props => isAuth
          ? <Component {...props} />
          : <Redirect to="/auth" />
      }
    />
  }
}

const PrivateRoute = connect(mapStateToProps)(PrivateRouteUnconnected)


class Panel extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <PrivateRoute exact path="/" component={Panel}/>
        <Route path="/auth" component={AuthPage} />
      </div>
    )
  }
}





export default App