import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLink from './Components/ImageLink';
import Rank from './Components/Rank';
import FaceBox from './Components/FaceBox';
import Particles from 'react-particles-js';
import Signin from './Components/Signin';
import Register from './Components/Register';




const initialState = {
      webPath:'',
      faceImage:'',
      box:'',
      route:'Signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }

class App extends Component {
  constructor(){
    super()
    this.state= initialState
  }

  loadUser = (data) => {
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: 0,
      joined: data.joined
    }})
  }

  imageBox = (data) => {
    const box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = image.width;
    const height = image.height;
    return{
      leftCol: box.left_col * width,
      topRow: box.top_row * height,
      rightCol: width - (box.right_col * width),
      bottomRow: height - (box.bottom_row * height)
    }
  }

  displayFaceBox=(fb)=>{
    this.setState({box:fb})
  }

  onInputChange = (event) =>{
    this.setState({webPath:event.target.value})
  }

  onButtonSubmit = () => {
      this.setState({faceImage:this.state.webPath})
        fetch('https://rocky-taiga-58696.herokuapp.com/imageurl',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
              input:this.state.webPath
          })
        })
        .then(response=>response.json())
          .then(response=>{
            if(response){
              fetch('https://rocky-taiga-58696.herokuapp.com/image',{
                method:'put',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                  id:this.state.user.id
                })
              })
                .then(response=>response.json())
                .then(count=>{
                  this.setState(Object.assign(this.state.user, {entries:count}))
                })
                .catch(console.log)
            }
            this.displayFaceBox(this.imageBox(response))
          })
          .catch(err=>console.log(err))
  }

  onRouteChange =(route) =>{
    if(route === 'Signin'){
      this.setState(initialState)
    }
    this.setState({route:route})
  }

  
  render() {
    return (
      <div className="App">
          
          {this.state.route === 'home'
            ? <div>
                <Navigation initialState={initialState} onRouteChange={this.onRouteChange}/>
                <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                <ImageLink buttonSubmit={this.onButtonSubmit} inputChange={this.onInputChange}/>
                <FaceBox box={this.state.box} faceImage={this.state.faceImage}/>
              </div>
            : (this.state.route === 'Signin' 
                ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)
          }

        <div className='particle'>
          <Particles 
            params={{
              "particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 800}},"color": {"value": "#ffffff"},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"},"polygon": {"nb_sides": 5},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.5,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 3,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"move": {"enable": true,"speed": 10,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "repulse"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 400,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
