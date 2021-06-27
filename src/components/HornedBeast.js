import React from 'react'

class HornedBeast extends React.Component {
    render(){
        return(
            <div className='imgDiv'>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} className='img'/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;