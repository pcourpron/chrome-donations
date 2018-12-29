import React from 'react';
import AboutUsNav from './AboutUsNav';

class LandingPage extends React.Component {

    render() {
        return (
            <div >
                <AboutUsNav />
                <div id='landing_page' className='container-fluid'>
                    <div className='row justify-content-center' id='header'>
                        <div className='col-xl-5 d-flex align-items-center justify-content-centee' style={{ paddingRight: '0' }}>
                            <div style={{width:'100%'}}>
                                <h1 className='text-center' style={{ padding: ' 30px' }}>Supporting great causes is just a click away!</h1>
                                <p className='text-center' style={{ color: 'grey' }}>Every time you open a browser or tab, you raise
                                    money for your non-profit or charity! Just pick your organizaiton or donate
                                    to the charity of the month, the choice is yours!
                            </p>
                            <button className='btn btn-primary font-weight-bold'style ={{margin:'0 auto',display:'block'}}>GET IT FOR CHROME</button>
                            </div>
                        </div>

                        <div className='col-xl-7' style={{ paddingRight: '0' }}>
                            <div className='row h-100 justify-content-end'>
                                <img src={'giving.jpg'} style={{ height: '630px' }} />
                            </div>
                        </div>

                    </div>
                    <div className='row justify-content-center' style={{ padding: '0', color: 'grey' }}>
                        <p>Some of our non-profits:</p>
                    </div>
                    <div className='row justify-content-around' style={{ paddingTop: '0', marginTop: '0' }}>
                        <img className='logos' src='red-cross.jpg' />
                        <img className='logos' src='smrc.png' />
                        <img className='logos' src='stjude.png' />
                        <img className='logos' src='ucla.png' style ={{height:'100px'}}/>
                        <img className='logos' src='msf.png' />
                        
                    </div>
                    <div className='row justify-content-around' style={{marginTop:'15px'}}>
                    <img className='logos' src='oic_logo_2.png' />
                    <img className='logos' src='stjoseph.jpeg' />

                        <img className='logos' src='wwp.png' />
                        <img className='logos' src='charitywater.png' /></div>
                    <div className='row' >
                        <div className='col-lg-6' style={{ paddingLeft: '0px' }}>
                            <img className='donation_hands' alt='hands with pennies' src='donations.jpeg' />
                        </div>
                        <div className='col-lg-6'>
                            <p style={{ fontSize: '20px', padding: '70px 10px', color: 'grey' }}> Many people want to donate but simply don't have the funds to do so.
                                Our chrome extension works to generate recurring revenue for your favorite organizations
                                at no cost to you so that they can focus on things other than fundraising.
                                    </p>
                        </div>

                    </div>
                    <div className='row' >
                        <div className='col-lg-6'>
                            <p style={{ fontSize: '20px', padding: '95px 10px', color: 'grey' }}>
                                How does this work?<br/>
                                Instead of your typical new tab page, another page with load with a few ads on it.
                                By looking at these ads with every new page load, you'll be generating a small amount 
                                for your non profit of choice!<br/><br/>
                                I'm working on making it more customizable in the coming months! If you have any recommendations
                                 send them to <a href='mailto:pierrecourpron@gmail.com'>pierrecourpron@gmail.com</a>
                                 </p>
                        </div>
                        <div className='col-lg-6' style={{ paddingRight: '0px', paddingLeft: '30px' }}>
                            <img id='group_picture' alt='person looking at ads' src='ads.jpeg' />
                        </div>
                    </div>
                    <div className='row' >
                    <div className='col-lg-6' style={{ paddingRight: '30px', paddingLeft: '0px' }}>
                            <img className='donation_hands' alt='Group holding shoulders looking into sunset' src='group.jpg' />
                        </div>
                        <div className='col-lg-6'>
                            <p style={{ fontSize: '20px', padding: '60px 10px', color: 'grey' }}>
                                Smaller non-profits don't receive as much funding as they should due to their size and visibility, but often
                                do great work! We're trying to partner with as many of them as possible, from local sports teams to
                                food banks and hospitals.
                                <br /> <br />
                                If you don't see your non-profit, just drop me a line at <a href='mailto:pierrecourpron@gmail.com?Subject=New%20non-profit' target="_top">pierrecourpron@gmail.com</a> and I'll
                                 try to get it added as soon as possible!
                                    </p>
                        </div>
                        
                    </div>
                   


                </div>
            </div>

        )
    }
}
export default LandingPage