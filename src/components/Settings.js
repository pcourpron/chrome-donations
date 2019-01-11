import React from 'react';
import Navbar from './Navbar'
import { withRouter } from 'react-router-dom';


class Settings extends React.Component {
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
                            <div className='row option'>
                                <span>Background Image</span>
                            </div>

                            <div className='row category' >
                                <span style={{ color: 'grey' }}>Profile</span>
                            </div>
                            <div className='row option'>
                                <span>Statistics</span>
                            </div>
                            <div className='row option'>
                                <span>Your Info</span>
                            </div>
                            <div className='row option'>
                                <span>Log Out</span>
                            </div>
                        </div>

                        <div className='col-md-9'>
                            <div className='row justify-content-center' style={{padding:'20px 0'}}>
                                <h5>Choose a background</h5>
                            </div>
                            <div className='row justify-content-around'>
                                <img className='background-img' src='https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/snow_mountain.jpg?alt=media&token=b6ba1621-93c9-4d76-9c95-637653f6cf1f' />
                                <img className='background-img' src='https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/lavander.jpg?alt=media&token=fcdd570e-5c50-468b-b65c-c392d848b294' />
                                <img className='background-img' src='https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/wooden_boat.jpg?alt=media&token=acc5b093-1dca-4a0c-9b3b-bfe3c4c8935a' />


                            </div>

                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default withRouter(Settings)
