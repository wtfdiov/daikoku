import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';

import * as actions from '../store/actions';

import DashboardScreen from './DashboardScreen';
import BetScreen from './BetScreen';
import HelpScreen from './HelpScreen';

const { Header, Sider, Footer } = Layout;

class MainContainer extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/bet">
                <Icon type="trophy" />
                <span>Bet</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/help">
                <Icon type="info-circle-o" />
                <span>Help</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => this.props.onLogOut()}>Sair</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>

          <Switch>
            <Route path="/" exact={true} component={DashboardScreen} />
            <Route path="/bet" exact={true} component={BetScreen} />
            <Route path="/help" exact={true} component={HelpScreen} />
          </Switch>

          <Footer className="footer" style={{ textAlign: 'center' }}>
          Crypto-Sena ©{(new Date()).getFullYear()}
        </Footer>
        </Layout>

      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(actions.logOut())
});

export default connect(null, mapDispatchToProps)(MainContainer);
