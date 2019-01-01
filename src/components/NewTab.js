import React from 'react';
import Navbar from './Navbar'
import Clock from 'react-live-clock';
import Background from '../assets/images/snow_mountain.jpg'
import moment from 'moment'

class NewTab extends React.Component{
    state = {
        input: undefined,
        date: new Date(),
        background: null,
        today: moment().local().format('LL')
      }
      sendToGoogle =(event)=>{
        event.preventDefault()
        if ((this.state.input === undefined)){
        window.top.location = `https://www.google.com/`
        }
        else{
          window.top.location = `https://www.google.com/search?q=${this.state.input}`
    
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
        (function(d) {
          var params =
          {
            bvwidgetid: "ntv_1976489",
            bvlinksownid: 1976489,
            rows: 1,
            cols: 3,
            textpos: "below",
            imagewidth: 150,
            mobilecols: 1,
            cb: (new Date()).getTime()
          };
          console.log(d.getElementById("ntv_1976489"))
          params.bvwidgetid = "ntv_1976489" + params.cb;
          d.getElementById("ntv_1976489").id = params.bvwidgetid;
          var qs = Object.keys(params).reduce(function(a, k){ a.push(k + '=' + encodeURIComponent(params[k])); return a},[]).join(String.fromCharCode(38));
          var s = d.createElement('script'); s.type='text/javascript';s.async=true;
          var p = 'https:' == document.location.protocol ? 'https' : 'http';
          s.src = p + "://bvadtgs.scdn1.secure.raxcdn.com/bidvertiser/tags/active/bdvws.js?" + qs;
          d.getElementById(params.bvwidgetid).appendChild(s);
        })(document);
    
        
      }
        
    render(){
        return(
            <div id='new-tab'>
            <Navbar/>
      <div className='overlay'></div>
        <header className="container-fluid" id='background' style={{backgroundImage:`url(${Background})`}}>
          <div className='row'>
            <div className='col'>
            <div className='row justify-content-center'>
            <Clock className={'clock'} format={'HH:mm'} ticking={true} />
            </div>
            <div className='row justify-content-center'>
            <h4 style={{color:'white'}}>{this.state.today}</h4>
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
          <div id="ezoic-pub-ad-placeholder-102"></div>
        <div id="ntv_1976489"></div>

        </header>


        </div>
        )
    }
}
export default NewTab