import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Alert } from 'antd';
import { autobind } from 'core-decorators';
import Auth from '../components/Auth';
import Message from '../components/Message';
import './SignInPage.scss';
import { Store, MessageType } from '../reducers/State';
import { signIn, hideMessage } from '../actions';

export interface SignInProps {
    username: string;
    messageContent: string;
    messageType: MessageType;
    messageIntlId: string;
    isValid: boolean;
    signIn: any;
    hideMessage: any;
    changeUserType: any;
}

class SignIn extends React.Component<SignInProps, any> {
  private usernameRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;
  private signInRef: React.RefObject<HTMLInputElement>;
  constructor(props)
  {
      super(props);
      this.usernameRef = React.createRef();
      this.passwordRef = React.createRef();
      this.state = { isUserNameEditable: true };
  }
  @autobind
  signIn()
  {
      let username = this.usernameRef.current.value;
      let password = this.passwordRef.current.value;
      this.props.signIn(username, password);
  }
  @autobind
  enter(e)
  {
    if(e.keyCode==13 || e.key=='Enter')
    {
        this.signIn();
    }
  }
  public render() {
    let userNameControl, erorrMessageControl;
    if(this.state.isUserNameEditable)
    {
        userNameControl = <div className="form-group">
                            <input ref={this.usernameRef} className="form-control placeholder-no-fix" type="text" placeholder="Username" name="username" />
                        </div>;
    }
    else
    {
        userNameControl = <h4>{this.props.username}</h4>;
    }
    if(!this.props.isValid){
        erorrMessageControl = <Alert message={<FormattedMessage id="SignIn.IsNotValid" />} type="error" />;
    }
    return (
      <div className="signIn" onKeyDown={this.enter}>
        <Auth  />
        <div className="page-lock">
            <div className="page-logo">
                <a className="brand" href="index.html">
                    <img src="../../assets/images/logo.png" alt="logo" />
                </a>
            </div>
            <div className="page-body">
                <div className="lock-head"><FormattedMessage id="SignIn.Title"/></div>
                <div className="lock-body">
                    <div className="pull-left lock-avatar-block">
                        <img src="../../assets/images/default-avatar.png" className="lock-avatar" />
                    </div>
                    <form className="pull-left lock-form">
                        {userNameControl}
                        <div className="form-group">
                            <input ref={this.passwordRef} className="form-control placeholder-no-fix" type="password" placeholder="Password" name="password" />
                        </div>
                        <div className="form-actions">
                            <button type="button" className="btn red uppercase" onClick={this.signIn}><FormattedMessage id="SignIn.SignInButton" /></button>
                        </div>
                    </form>
                </div>
                <div className="lock-bottom">
                    {erorrMessageControl}
                    <FormattedMessage id="SignIn.SwitchUser" values={{username : this.props.username}} />
                </div>
            </div>
            <div className="page-footer-custom"><FormattedMessage id="Layout.Copyright"/></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( { signIn } : Store) => ({
    isValid: signIn.isValid
})

const mapDispatchToProps = {
    signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
