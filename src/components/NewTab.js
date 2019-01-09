import React from 'react';
import Navbar from './Navbar'
import Clock from 'react-live-clock';
import Background from '../assets/images/snow_mountain.jpg'
import moment from 'moment'



class NewTab extends React.Component {
  state = {
    input: undefined,
    date: new Date(),
    background: null,
    today: moment().local().format('LL')
  }
  sendToGoogle = (event) => {
    event.preventDefault()
    if ((this.state.input === undefined)) {
      window.top.location = `https://www.google.com/`
    }
    else {
      window.top.location = `https://www.google.com/search?q=${this.state.input}`

    }
  }

  inputChange = (event) => {
    console.log(event.target.value)

    this.setState({ input: event.target.value }, () => {
      console.log(this.state)
    })

  }

  setBackground() {
    var backgrounds = ['lavander', 'snow_mountain', 'waterfall', 'wooden_boat'];
    let selection = Math.ceil(Math.random() * 4)
    this.setState({ background: backgrounds[selection] })
  }


  componentDidMount() {
    this.setBackground()
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );


    var venus164843 = { blockId: "164843", async: true };
    (function (w, d, o, t) {
      console.log('hit')
      o.send = function () {
        (o.queue = o.queue || []).push(arguments);
      };
      var s = d.createElement(t);
      if (o.async) s.async = 1;
      s.src = "//block.sw2block.com/rotator/164843.js";
      var i = d.getElementsByTagName(t)[0];
      i.parentNode.insertBefore(s, i);
      o.send("pageview");
    })(window, document, venus164843, "script");





  }

  render() {
    return (
      <div id='new-tab'>
        <Navbar />
        <div className='overlay'></div>

        <header className="container-fluid" id='background' style={{ backgroundImage: `url(${Background})` }}>
          <div className='row'>
            <div className='col'>
              <div className='row justify-content-center'>
                <Clock className={'clock'} format={'HH:mm'} ticking={true} />
              </div>
              <div className='row justify-content-center'>
                <h4 style={{ color: 'white' }}>{this.state.today}</h4>
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
                    onChange={this.inputChange}
                  >
                  </input>
                </div>
                <div className='row justify-content-center' id='search'>
                  <button className='btn btn-primary' type='submit'>Search</button>
                </div>
              </form>

            </div>
            <div id="venus-164843"></div>

          </div>
        </header>


      </div>
    )
  }
}
export default NewTab