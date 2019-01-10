import React from 'react';
import { withRouter } from 'react-router-dom';




class Login extends React.Component {

    GoogleLogin = () => {
        this.props.firebase.auth().signInWithPopup(this.props.GoogleProvider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            var displayName = user.displayName.split(' ')
            if (displayName.length === 2) {
                var firstName = displayName[0]
                var lastName = displayName[1]
            }
            else if (displayName.length === 3) {
                var firstName = displayName[0]
                var lastName = displayName[2]
            }

            this.props.firestore.collection('Users').doc(user.uid).set({ First: firstName, Last: lastName, UID: user.uid }).then((result) => {
                this.props.history.push('/newTab')

            }).catch(function (error) {
                console.log(error)
                console.log('hit1')
            });

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    facebookLogin = () => {
        this.props.firebase.auth().signInWithPopup(this.props.facebookProvider).then((result) => {

            console.log(result)

            var user = result.user;
            var displayName = user.displayName.split(' ')
            if (displayName.length === 2) {
                var firstName = displayName[0]
                var lastName = displayName[1]
            }
            else if (displayName.length === 3) {
                var firstName = displayName[0]
                var lastName = displayName[2]
            }

            this.props.firestore.collection('Users').doc(user.uid).set({ First: firstName, Last: lastName, UID: user.uid }).then((result) => {

                this.props.history.push('/newTab')
            }).catch(function (error) {
                console.log(error)
            });

        }).catch(function (error) {
            console.log(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className='container'>
                        <a className="navbar-brand " href="/">Tably</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                </nav>
                <div className='row justify-content-center align-items-center' style={{ height: '50%' }}>
                    <div className='col-3'>
                        <div className='row justify-content-center'>
                            <button className='btn btn-light shadow border' style={{ backgroundColor: 'white' }} onClick={this.GoogleLogin}>
                                <img src='/googleLogo.png' style={{ height: '25px' }} />
                                <span className='font-weight-bold ' style={{ color: '#4688F1', marginLeft: '5px' }}>Login with Google</span>
                            </button>
                        </div>
                        <div className='row justify-content-center' style={{ marginTop: '20px' }}>

                            <button className='btn btn-light shadow border' style={{ backgroundColor: 'white' }} onClick={this.facebookLogin}>
                                <img src='https://www.carlalbert.edu/wp-content/uploads/2018/03/facebook_logos_PNG19751.png' style={{ height: '25px' }} />
                                <span className='font-weight-bold ' style={{ color: '#4688F1', marginLeft: '5px' }}>Login with Facebook</span>
                            </button>
                        </div>
                        <div className='row justify-content-center' style={{ marginTop: '15px' }}>
                            <button className='btn btn-outline-primary' onClick={() => {
                                this.props.history.push('/')

                            }}> Back to Landing Page</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)