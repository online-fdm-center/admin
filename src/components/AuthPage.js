import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { login, TEST_LOGIN_FAILED } from '../actions/auth'

const mapStateToProps = ({auth}) => ({
  token: auth.token,
  status: auth.status
})
const mapDispatchToProps = dispatch => ({
  login: (token) => dispatch(login(token))
})

class AuthPage extends Component {
  constructor(props){
    super()
    if(props.token){
      props.history.push('/')
    }
    this.state = {
      token: ''
    }
  }

  componentDidUpdate(){
    if(this.props.token){
      this.props.history.push('/')
    }
  }

  onLogin = (e) => {
    e.preventDefault()
    this.props.login(this.state.token)
  }

  onChangeToken = (e) => {
    this.setState({token: e.target.value})
  }

  render() {
    return (
      <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
        <h2>Авторизация</h2>
        <Form style={{ width: '30rem' }}>
          <Form.Group>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="1q2w3e"
              value={this.state.token}
              onChange={this.onChangeToken}
              required
              isInvalid={this.props.status === TEST_LOGIN_FAILED}
            />
            <Form.Control.Feedback type="invalid">Неверный пароль</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.onLogin}>
            Войти
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)