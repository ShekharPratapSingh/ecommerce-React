import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component';
import './sign-in.styles.scss'
class SignIn extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: "shekhar@gmail.com",
            password:"1234"
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({email:"",password:""})
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
        
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label="email" handleChange={this.handleChange} required/>
                  
                    <FormInput name="password" type="password" value={this.state.password} label="password" handleChange={this.handleChange} required/>
                   
                    <CustomButton type="submit" >Sign In</CustomButton>
                </form>
           </div>
       ) 
    }
}

export default SignIn