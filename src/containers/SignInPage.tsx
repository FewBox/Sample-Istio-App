import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Alert, Row, Col, Input, Button, Form, Icon, Checkbox } from 'antd';
import { autobind } from 'core-decorators';
import Auth from '../components/Auth';
import './SignInPage.scss';
import { Store } from '../reducers/State';
import { signIn } from '../actions';

export interface SignInProps {
    form: any;
    username: string;
    isValid: boolean;
    signIn: any;
    changeUserType: any;
}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignIn extends React.Component<SignInProps, any> {
  constructor(props)
  {
      super(props);
      this.props.form.validateFields();
  }
  @autobind
  signIn(e)
  {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signIn(values.userName, values.password);
      }
    });
  }
  @autobind
  enter(e)
  {
    if(e.keyCode==13 || e.key=='Enter')
    {
        this.signIn(e);
    }
  }
  public render() {
    let erorrMessageControl;
    if(!this.props.isValid){
        erorrMessageControl = <Alert message={<FormattedMessage id="SignIn.IsNotValid" />} type="error" />;
    }
    const {
        getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
      } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className="signIn" onKeyDown={this.enter}>
        <Auth  />
        <div>
            <Row>
                <Col span={8}>
                    <div><FormattedMessage id="SignIn.Title"/></div>
                    <div>
                        <Form onSubmit={this.signIn} className="login-form">
                            <Form.Item
                                validateStatus={userNameError ? 'error' : ''}
                                help={userNameError || ''}
                            >
                                {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item
                                validateStatus={passwordError ? 'error' : ''}
                                help={passwordError || ''}
                                >
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {erorrMessageControl}
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    disabled={hasErrors(getFieldsError())}
                                >
                                    <FormattedMessage id="SignIn.SignInButton" />
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                    <div>
                        <FormattedMessage id="SignIn.SwitchUser" values={{username : this.props.username}} />}
                    </div>
                </Col>
                <Col span={16}></Col>
            </Row>
            <Row>
                <Col span={24}><div className="footer"><FormattedMessage id="Layout.Copyright" /></div></Col>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SignIn));
