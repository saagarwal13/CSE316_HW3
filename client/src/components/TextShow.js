import React, { Component } from 'react'

class TextShow extends Component {
  
    render() {

        return(
            <div  onClick={this.props.handleClick.bind(this,this.props.text)} style={{fontSize: this.props.text.fontSize + "px" , color: this.props.text.color}}>
               
                {this.props.text.title}
            </div>
            
          



        )


    }
}

export default TextShow