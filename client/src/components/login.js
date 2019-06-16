import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Bootstrap from "react-bootstrap";
//import { AUTH_TOKEN } from '../constants';



class Login extends Component{
	state = {
		login: true,
		username: '',
		password: '',
	
	}


	handleSubmit = event => {
       		event.preventDefault();
       			try{
				//this.props.onSubmit(this.state);
       				this.setState({
       					username: '', 
					password: '',
					login: true
       				});
				this.props.history.push("/index");
			}catch(e){
				alert(e.message);
			}
	}
	
	render(){
		const {login, email, password, name} = this.state;
		return(
			<div className="Login">
				<h2>{login ? 'Login' : 'Sign Up'}</h2>
				<Form className = "login-form" onSubmit = {this.handleSubmit}>
          				<Form.Group controlId="email" bsSize="large">
            				<Form.Label>Email</Form.Label>
            					<Form.Control
              						autoFocus
							placeholder = "joe_shmo_32"
              						type="text"
              						value={email}
              						onChange={e =>this.setState({username: e.target.value})}
            					/>
          				</Form.Group>
          				<Form.Group controlId="password" bsSize="large">
            					<Form.Label>Password</Form.Label>
            						<Form.Control
              						value={password}
              						onChange={e => this.setState({password: e.target.value})}
              						type="password"
            					/>
          				</Form.Group>
          				<Button
            					block
            					bsSize="large"
            					type="submit"
          				>
						{login ? 'Login' : 'Create Account'}
          				</Button>
			
					<Button
						variant = "outline-primary"
						block
						bsSize="large"
						onClick={() => this.setState({login: !login })}
          				>
            					{login
              						? 'need to create an account?'
              						: 'already have an account?'}
					</Button>
               			</Form>	
			</div>
		);
	}

	_confirm = async () => {
   	 // ... you'll implement this 🔜
  	}

  	_saveUserData = token => {
    		localStorage.setItem(AUTH_TOKEN, token)
  	}

}
export default Login
