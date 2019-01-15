import React from 'react';
import Navbar from './Navbar'
import { withRouter } from 'react-router-dom';
import Backgrounds from './Backgrounds'
import Statistics from './Statistics';
import Info from './Info'


class Settings extends React.Component {
    state = {
        selection: 'background',
        tabs : null,
        fullName: null,
        
    }
    componentDidMount=()=>{
        this.props.firebase.firestore().collection('Users').doc(this.props.uid).get().then((doc)=>{
            if (doc.data().tabCount){
                this.setState({tabs:doc.data().tabCount, fullName: `${doc.data().First} ${doc.data().Last}`})
            }
        })
    }
    
    render() {
        return (
            <div id='settings'>
                <Navbar background='navbar-dark' page='settings' transparent='bg-dark' />
                <div className='container-fluid'>
                    <div className='row' style={{ height: '100%' }}>
                        <div className='col-md-3'>
                            <div className='row category' >
                                <span style={{ color: 'grey' }}>Settings</span>
                            </div>
                            <div className='row option' onClick= {()=>{ this.setState({selection:'background'})}}>
                                <span>Background Image</span>
                            </div>

                            <div className='row category' >
                                <span style={{ color: 'grey' }}>Profile</span>
                            </div>
                            <div className='row option' onClick= {()=>{ this.setState({selection:'info'})}}>
                                <span>Your Info</span>
                            </div>
                            <div className='row option' onClick= {()=>(this.props.logOut())}>
                                <span>Log Out</span>
                            </div>
                        </div>

                        <div className='col-md-9'>
                         { this.state.selection === 'background' ? <Backgrounds/>: <Info fullName={this.state.fullName} tabs ={this.state.tabs}/>}
                         
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default withRouter(Settings)
