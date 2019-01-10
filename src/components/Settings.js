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

                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default withRouter(Settings)
