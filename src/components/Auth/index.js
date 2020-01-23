import React from 'react';
import './Auth.css'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    message
  } from 'antd';
import {connect} from 'react-redux';
import {loginAction} from '../../actions/loginAction';
import {logoutAction} from '../../actions/logoutAction';
  
class AuthComponent extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      data: {
          email: '',
          password: '',
      }
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            this.props.loginAction(values);
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Пароли не совпадают!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
  
    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

  
      return (
        <Col className='loginForm'>  
        <h2>Вход</h2>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'Введите правильный E-mail!',
                },
                {
                  required: true,
                  message: 'Введите E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Пароль" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Введите пароль!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              ВОЙТИ
            </Button>
          </Form.Item>
        </Form>
        </Col>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return{
          loginAction: (user) => dispatch(loginAction(user))
     }
  }

  const Auth = Form.create({ name: 'auth' })(AuthComponent);

  export default connect(null, mapDispatchToProps)(Auth)