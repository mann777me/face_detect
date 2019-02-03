import React,{Component} from 'react';


class Signin extends Component {
	constructor(){
		super()
		this.state = {
			signinEmail:'',
			signinPassword:''
		}
	}

	signEmail=(event)=>{
		this.setState({signinEmail:event.target.value})
	}

	signPassword=(event)=>{
		this.setState({signinPassword:event.target.value})
	}

	onSignin = () =>{
		fetch('https://rocky-taiga-58696.herokuapp.com/signin', {
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				email:this.state.signinEmail,
				password: this.state.signinPassword
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.id){
				this.props.loadUser(user)
				this.props.onRouteChange('home')
			}
		})
	}

	render(){
		return(
			<main className="pa4 black-80 dib w-30 shadow-5 center mt5 flex flex-wrap">
			  <div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange={this.signEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={this.signPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={this.onSignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
			    </div>
			    <div className="lh-copy mt3">
			      <p  onClick={()=>this.props.onRouteChange('register')} href="#0" className="f4 link dim black db pointer">REGISTER</p>
			    </div>
			  </div>
			</main>
		)
	}
}


export default Signin ;