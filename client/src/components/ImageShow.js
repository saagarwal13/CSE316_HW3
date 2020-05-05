import React, { Component } from 'react'


class   ImageShow extends Component {
  
    render() {

        return(
            <img src= {this.props.image.url} alt=""
             />


        )

    }


}
export default ImageShow