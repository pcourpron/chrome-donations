import React from 'react';
import Navbar from './Navbar'
import Clock from 'react-live-clock';
import Background from '../assets/images/snow_mountain.jpg'
import moment from 'moment'



class NewTab extends React.Component {
  state = {
    input: undefined,
    date: new Date(),
    today: moment().local().format('LL'),
    background: null,
  
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
    var lavander ='https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/lavander.jpg?alt=media&token=fcdd570e-5c50-468b-b65c-c392d848b294'
    var boat  = 'https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/wooden_boat.jpg?alt=media&token=acc5b093-1dca-4a0c-9b3b-bfe3c4c8935a'
    var mountain = 'https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/snow_mountain.jpg?alt=media&token=b6ba1621-93c9-4d76-9c95-637653f6cf1f'
    var backgrounds = [lavander,boat,mountain];
    let selection = Math.floor(Math.random() * 3)
    this.setState({ background: backgrounds[selection] })
  }

  

  componentDidMount() {
    this.setBackground()
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
   

    this.props.firebase.firestore().collection('Users').doc(this.props.userID).get().then((doc)=> {
      if (doc.exists) {
        if (doc.data().tabCount){
        this.props.firebase.firestore().collection('Users').doc(this.props.userID).update({tabCount:doc.data().tabCount+1})
        }
        else{
        this.props.firebase.firestore().collection('Users').doc(this.props.userID).update({tabCount:1})

        }
      } else {
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  


   
  }

  render() {
    return (
      <div id='new-tab'>
        <Navbar background='navbar-dark'/>
        <div className='overlay'></div>

        <header className="container-fluid" id='background' style={{ backgroundImage: `url(${this.state.background})` }}>
          
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
     
          </div>
    <ins data-zone="184040" className="byadthink"></ins>


        </header>


      </div>
    )
  }
}
export default NewTab