// React Redux
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as AuthActions from '../../actions/auth';

// Styles
import './Login.css';

// Components
import {ContainerTitle} from '../../elements/ContainerTitle/ContainerTitle'
// Third Part Components
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Libs
import {Validation} from '../../libs/validation';
 
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailErr: '',
            passwordErr: ''
        }
    }

    login(e) {
        this.validate().then(() => {
            this.props.actions.login(this.state.email, this.state.password);
        });
    }

    validate() {
        this.clearValidation();
        return new Promise((resolve, reject) => {
            let hasErr = false;

            if(this.state.email == ''){
                this.setState({
                    emailErr: 'email address is required'
                });
                hasErr = true  
            }
                    
            if(!Validation.email(this.state.email)){
                this.setState({
                    emailErr: 'email address must be valid'
                });
                hasErr = true  
            }

            if(this.state.password === ''){
                this.setState({
                    passwordErr: 'password is required'
                });
                hasErr = true  
            }

            if (!hasErr) {
                resolve();
            }
            reject();
        })
    }

    clearValidation() {
        this.setState({
            emailErr: '',
            passwordErr: ''
        })
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-wrapper">
                    <ContainerTitle 
                    title="Login" 
                    subTitle="lotem ipsum dolor sit edum color it edsu"/>

                    <Paper style={{padding: "1.25rem"}}>
                        <TextField 
                            floatingLabelText="Email"
                            fullWidth={true}
                            onChange={(e, value) => this.setState({email: value})}
                            errorText={this.state.emailErr}>
                        </TextField>
                        {/* <br/> */}
                        <TextField 
                            floatingLabelText="Password"
                            fullWidth={true}
                            type={"password"}
                            onChange={(e, value) => this.setState({password: value})}
                            errorText={this.state.passwordErr}>
                        </TextField>
                        <br/>
                        <br/>
                        <br/>
                        <RaisedButton 
                        label="Login" 
                        primary={true}
                        onClick={e => this.login(e)}/>
                    </Paper>
                </div>   
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);