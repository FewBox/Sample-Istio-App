import * as React from 'react';
import { connect } from 'react-redux';
import{ Link }  from  'react-router-dom';
import { autobind } from 'core-decorators';
import { FormattedMessage } from 'react-intl';
import Message from '../components/Message';
import { Store, MessageType } from '../reducers/State';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
import { Route } from 'react-router-dom'
import Auth from '../components/Auth';
import { hideMessage } from '../actions';
import './MasterPage.scss';
import HomePage from './HomePage';

export interface MasterPageProps {
  messageType: MessageType;
  messageIntlId: string;
  messageContent: string;
  isMessageVisiable: boolean;
  hideMessage: any;
}

class MasterPage extends React.Component<MasterPageProps, any> {
  constructor(props) {
    super(props);
    this.state = {collapsed: false};
  }
  @autobind
  toggle()
  {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  public render() {
    return (
      <div className="masterPage">
        <Auth  />
        <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/master/dashboard'>
              <Icon type="dashboard" />
              <FormattedMessage id="Navigation.Dashboard"/></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/master/user'><Icon type="user" />
              <FormattedMessage id="Navigation.User"/></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/master/group'><Icon type="team" />
              <FormattedMessage id="Navigation.Group"/></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/master/role'><Icon type="idcard" />
              <FormattedMessage id="Navigation.Role"/></Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to='/master/api'><Icon type="api" />
              <FormattedMessage id="Navigation.Api"/></Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to='/master/module'><Icon type="appstore" />
              <FormattedMessage id="Navigation.Module"/></Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to='/master/permission'><Icon type="lock" />
              <FormattedMessage id="Navigation.Permission"/></Link>
            </Menu.Item>
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
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Route path="/master/home" component={HomePage} />
          </Content>
          <Footer><FormattedMessage id="Layout.Copyright"/></Footer>
        </Layout>
      </Layout>
      <Message isVisable={this.props.isMessageVisiable} type={this.props.messageType} intlId={this.props.messageIntlId} onClose={this.props.hideMessage} content={this.props.messageContent} />
      </div>
    );
  }
}

const mapStateToProps = ( {master} : Store) => ({
  messageContent: master.message.content,
  messageType: master.message.type,
  messageIntlId: master.message.intlId,
  isMessageVisiable: master.isMessageVisiable,
  redirectPath: master.path
})

const mapDispatchToProps = {
  hideMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterPage);