import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Clock from 'react-live-clock';
import moment from 'moment'
import Background from './assets/images/snow_mountain.jpg'


class App extends Component {
  state = {
    input: undefined,
    date: new Date(),
    background: null,
    today: moment().format('LL')
  }
  
  sendToGoogle =(event)=>{
    event.preventDefault()
    if ((this.state.input === undefined)){
    window.location = `https://www.google.com/`
    }
    else{
      window.location = `https://www.google.com/search?q=${this.state.input}`

    }
  }

  inputChange = (event)=>{
    console.log(event.target.value)

    this.setState({input: event.target.value},()=>{
      console.log(this.state)
    })

  }

  setBackground(){
    var backgrounds = ['lavander','snow_mountain','waterfall','wooden_boat'];
    let selection  = Math.ceil(Math.random()*4)
    this.setState({background:backgrounds[selection]})
  }


  componentDidMount() {
    this.setBackground()
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );

    
  }


  render() {
    return (

      <div className="App" >
      <Navbar/>
      <div className='overlay'></div>
        <header className="container-fluid" id='background' style={{backgroundImage:`url(${Background})`}}>
          <div className='row'>
            <div className='col'>
            <div className='row justify-content-center'>
            <Clock className={'clock'} format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
            </div>
            <div className='row justify-content-center'>
            <h4>{this.state.today}</h4>
            </div>
            <div className='row justify-content-center' id='header'>
   
            </div>
              <form onSubmit={(event) => {
                this.sendToGoogle(event)

              }} style={{ height: '100%', width: '100%' }}>
                <div className='row justify-content-center'>

                  <input
                    placeholder='Search Google'
                    style={{ width: '45%', height: '40px', borderRadius: '20px' }}
                    onChange= {this.inputChange}
                  >
                  </input>
                </div>
                <div className='row justify-content-center' id='search'>
                <button className='btn btn-primary' type='submit'>Search</button>
                </div>
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
