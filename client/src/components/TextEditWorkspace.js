import React, { Component } from 'react'

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
                maxWidth: "max-content",
                minWidth: "min-content",
                maxHeight: "100%",
                minHeight: "10%"
                
            }
        }
        return (
            <div className="col s8"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace