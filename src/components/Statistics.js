import React from 'react';

class Statistics extends React.Component {
    render() {
        return (
            <div>
                <div className='row justify-content-center' style={{ padding: '20px 0' }}>
                    <h5>Your Stats</h5>
                </div>
                <div className='row '>
                    <p> Number of tabs opened since joining: {this.props.tabs} </p>
                </div>
            </div>)
    }
}

export default Statistics