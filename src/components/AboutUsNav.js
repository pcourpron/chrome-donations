import React from 'react'


class AboutUsNav extends React.Component {
    NavbarClick = (location)=>{
        switch (location) {
            case 'gmail':
                window.top.location = 'https://mail.google.com/mail/u/0/' 
                break;
                case 'aboutUs':
                window.top.location = '/aboutUs' 
                break;
        
                case 'newTab':
                window.top.location = '/newTab' 
                break;
        
            default:
                break;
        }

    }
        


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className='container'>
                    <span className="navbar-brand" href="#">Tably</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>{this.NavbarClick('gmail')}} >Gmail </button>
                            </li>
                    
                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>{this.NavbarClick('aboutUs')}}>About us</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>{this.NavbarClick('newTab')}}>New Tab</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default AboutUsNav