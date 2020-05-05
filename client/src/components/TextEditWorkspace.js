import React, { Component } from 'react'
import TextShow from "./TextShow.js";
import ImageShow from "./ImageShow.js";

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    
   

   
    render() {
        const styles = {
            container: {
                color: this.props.logo.color,
                fontSize: this.props.logo.fontSize + "px",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "px",
                borderWidth: this.props.logo.borderWidth + "px",
                padding: this.props.logo.padding + "px",
                margin: this.props.logo.margin + "px",
                borderStyle: "solid",
                
                maxWidth:  this.props.logo.width + "px",
                minWidth: this.props.logo.width + "px",
                maxHeight:  this.props.logo.height + "px",
                minHeight:  this.props.logo.height + "px",
                
            }
        }
        return (
            <div  className="col s8"
                style={ styles.container }>
                {console.log(this.props.logo)}
                {this.props.logo.texts.map((tex)=>(<TextShow  text={tex}  handleClick={this.props.handleClick}/>))}

                {this.props.logo.images.map((image)=>(<ImageShow  image={image}  />))}

               
            </div>
        )
    }
}

export default TextEditWorkspace
//{this.props.logo.texts.map((tex)=>(<textShow  text={tex}/>))}