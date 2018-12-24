import React from 'react';




class Login extends React.Component {

    GoogleLogin = () => {
        this.props.firebase.auth().signInWithPopup(this.props.provider).then((result)=> {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            console.log(token)
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
            console.log(firstName)
            this.props.firestore.collection('Users').doc(user.uid).set({ First: firstName, Last: lastName, UID: user.uid }).then(function (result) {
                console.log(result)
                console.log('hit')
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

    render() {
        return (
            <div>

                <button className='btn btn-primary' onClick={this.GoogleLogin}>google login</button>

            </div>
        )
    }
}

export default Login