import React from 'react';
import Select from 'react-select'
const options = [
    { value: 'charityWater', label: 'Charity: Water' },
    { value: `Doctors without borders`, label: `Doctors without borders` },
    { value: 'Gaurdian Outreach Program', label: 'Gaurdian Outreach Program' },
    { value: 'OIC', label: 'Orthopeadic Institute for Children' },
    { value: 'Red Cross', label: 'Red Cross' },
    { value: 'Saint Joseph Center', label: 'Saint Joseph Center' },
    { value: 'Sepis', label: 'Sepis' },
    { value: 'St. Jude ', label: "St. Jude Children's Research Hospital" },
    { value: `SMRC`, label: `Santa Monica Rugby Club` },
    { value: 'Teen Challenge', label: 'Teen Challenge' },
    { value: 'Tonality', label: 'Tonality' },
    { value: `UCLA Men's rugby`, label: `UCLA Men's rugby` },
    { value: `UCLA Spirit Squad`, label: `UCLA Spirit Squad` },
    { value: 'Wounded Warrior Project', label: 'Wounded Warrior Project' }



];
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid black',
        color: state.isSelected ? 'blue' : 'blue',
        padding: 20,
        width: 300,
        backgroundColor:'white',
        zIndex: "999"
    }),

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}


class FirstLogin extends React.Component {
    state = {
        selectedOption: {label:'Charity of the Month'}
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

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



            this.props.firestore.collection('Users').doc(user.uid).set({ First: firstName, Last: lastName, UID: user.uid, nonProfit: this.state.selectedOption.label }, { merge: true }).then((result) => {
            }).catch(function (error) {
                console.log(error)
            });



        }).catch(function (error) {
            // Handle Errors here.
            console.log(error)
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
            console.log(result.user)
            this.props.firestore.collection('Users').doc(user.uid).set({ First: firstName, Last: lastName, UID: user.uid, nonProfit: this.state.selectedOption.label }, { merge: true }).then((result) => {
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
        const { selectedOption } = this.state;
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='row justify-content-center' style={{ marginTop: '20px' }}>
                            <h3>Thank you for downloading Tably!</h3>
                        </div>
                        <div className='row justify-content-center'>
                            <p> Here are the steps to create your account!</p>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='row step1' style={{ borderTop: '1px solid black', width: '650px' }}>
                            </div>
                        </div>
           
                        <div className='row' style={{zIndex:999}}>
                            <div className='col'>
                                <div className='row justify-content-center' className='step1'>
                                    <div className='col'>
                                        <br />
                                        <div className='row justify-content-center'>
                                            <h6> Step 1(optional): Select a non-profit to support</h6>
                                        </div>

                                        <div className='row justify-content-center'>
                                            <div className='row info_row'>
                                                <p style={{ paddingTop: '5px', marginRight: '20px' }}>Select a non-profit :</p>
                                                <Select
                                                    styles={customStyles}
                                                    value={selectedOption}
                                                    onChange={this.handleChange}
                                                    options={options}
                                                    isClearable={true}
                                                />
                                            </div>
                                        </div>
                                        <div className='row justify-content-center'>
                                            <p style={{ fontSize: '10px' }}> If you don't pick a non-profit the money generated by your tabs will go to the non profit of the month!</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className='row justify-content-center'>
                            <div className='row step2' style={{ borderTop: '1px solid black', width: '650px' }}>
                            </div>
                        </div>
                        <br />
                                <div className='row justify-content-center step2'>
                                    <h6> Step 2: Create your account by logging in below</h6>
                                </div>
                                <div className='row justify-content-center'>
                                    <p className = 'step2' style={{ fontSize: '12px' }}> You need to create an account in order for us to track the amount of revenue generated by you! </p>
                                </div>
                                <div className='row justify-content-center step2'>
                                    <button className='btn btn-light shadow border' style={{ backgroundColor: 'white'}} onClick={this.GoogleLogin}>
                                        <img src='/googleLogo.png' style={{ height: '25px' }} />
                                        <span className='font-weight-bold ' style={{ color: '#4688F1', marginLeft: '5px' }}>Login with Google</span>
                                    </button>
                                </div>
                                <div className='row justify-content-center step2' style={{ marginTop: '20px' }}>

                                    <button className='btn btn-light shadow border' style={{ backgroundColor: 'white' }} onClick={this.facebookLogin}>
                                        <img src='https://www.carlalbert.edu/wp-content/uploads/2018/03/facebook_logos_PNG19751.png' style={{ height: '25px' }} />
                                        <span className='font-weight-bold ' style={{ color: '#4688F1', marginLeft: '5px' }}>Login with Facebook</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className='row justify-content-center'>
                            <div className='row step3' style={{ borderTop: '1px solid black', width: '650px' }}>
                            </div>
                        </div>
                        <br />
                        <div className='row justify-content-center step3'>
                            <div className='col'>
                                <div className='row justify-content-center'>

                                    <h6> Step 3: Use your internet like you normally would! </h6>
                                </div>
                                <div className='row justify-content-center'>
                                    <p style={{ fontSize: '14px' }}> Every time you open a tab, you generate money for your non-profit!</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <button className='btn btn-primary font-weight-bold' style={{ margin: '0 auto', display: 'block' }} onClick={() => {
                                        window.top.location = '/newTab'
                                    }}>GET TO TABBING!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )

    }
}
export default FirstLogin
