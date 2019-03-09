import React, { Component } from 'react';
import { Layout, Row, Col, Input, Icon, Button } from 'antd';

import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import '../../App.css';

const { Content, Footer } = Layout;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleLogin = () => {
    this.props.onLogin(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <Layout className="layout">
        <Content style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Row >
            <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
              <div style={{
                backgroundColor: '#192a56',
                minHeight: '40vh',
                borderRadius: 15,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Col xs={{ span: 20, offset: 2 }}>
                  <Input
                    size="large"
                    placeholder="Nome de usuário"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={email}
                    onChange={this.onChangeEmail}
                  />

                  <Input.Password
                    size="large"
                    placeholder="Senha"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={password}
                    onChange={this.onChangePassword}
                    style={{
                      marginTop: 20,
                      marginBottom: 20
                    }}
                  />

                  <Button
                    block
                    type="primary"
                    onClick={this.handleLogin}
                  >
                    ENTRAR
                  </Button>
                </Col>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer className="footer" style={{ textAlign: 'center' }}>
          Crypto-Sena ©{(new Date()).getFullYear()}
        </Footer>
      </Layout >
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (credentials) => dispatch(actions.tryAuth(credentials))
});


export default connect(null, mapDispatchToProps)(Login);