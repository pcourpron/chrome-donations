import React from 'react';


class Backgrounds extends React.Component {
    render() {
        return (<div>
            <div className='row justify-content-center' style={{ padding: '20px 0' }}>
                <h5>Choose a background</h5>
            </div>
            <div className='row justify-content-around'>
                <img className='background-img' src='https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/snow_mountain.jpg?alt=media&token=b6ba1621-93c9-4d76-9c95-637653f6cf1f' />
                <img className='background-img' src='https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/lavander.jpg?alt=media&token=fcdd570e-5c50-468b-b65c-c392d848b294' />
                <img className='background-img' src='https://firebasestorage.googleapis.com/v0/b/tably-f516a.appspot.com/o/wooden_boat.jpg?alt=media&token=acc5b093-1dca-4a0c-9b3b-bfe3c4c8935a' />
            </div>
            <div className='row justify-content-around' style={{marginTop:'20px'}}>
            <p className='text-center'> These backgrounds will rotate randomly ever time you open a new tab. Adding a personal picture or always selecting one of these will be coming shortly.</p>

            </div>
        </div>)
    }
}

export default Backgrounds