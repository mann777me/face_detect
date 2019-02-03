import React,{Component} from 'react';

class Register extends Component {
	constructor(){
		super()
		this.state={
			regEmail:'',
			regPassword:'',
			regName:''
		}
	}

	regEmailChange =(event)=>{
		this.setState({regEmail:event.target.value})
	}

	regPasswordChange =(event)=>{
		this.setState({regPassword:event.target.value})
	}

	regNameChange =(event)=>{
		this.setState({regName:event.target.value})
	}

	onRegistrationSubmit=()=>{
		fetch('https://rocky-taiga-58696.herokuapp.com/register', {
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				name:this.state.regName,
				email:this.state.regEmail,
				password:this.state.regPassword
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user){
			this.props.loadUser(user)
			this.props.onRouteChange('Signin')
			}
		})
	}

	render() {
		return(
		<main className="pa4 black-80 dib w-30 shadow-5 center mt4">
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f3 fw6 ph0 mh0">REGISTRATION FORM</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="text">Name</label>
		        <input onChange={this.regNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="text"  id="text" />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input onChange={this.regEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input onChange={this.regPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
		      </div>
		    </fieldset>
		    <div className="">
		      	<input onClick={this.onRegistrationSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
		      <div className="lh-copy mt3">
		     	 <p  onClick={()=>this.props.onRouteChange('Signin')} href="#0" className="f4 link dim black db pointer">Back</p>
		    </div>
		    </div>
		  </div>
		</main>
		)

	}
}

export default Register ;