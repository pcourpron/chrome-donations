import React from 'react'

class Bookmark extends React.Component {

    render(){
        console.log(this.props.url)
        let url ='chrome-search://ntpicon/size/24@2x/https://'+this.props.url
        return(<div class = 'bookmark'>
        <img src ={url}/>

        </div>)
    }

}

export default Bookmark