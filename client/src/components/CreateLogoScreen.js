import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import  TextEditWorkspace   from "./TextEditWorkspace.js";
import  EditLogoScreen from "./EditLogoScreen";

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!
        $borderColor: String!
        $padding: Int!,
        $margin:  Int!) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            backgroundColor: $backgroundColor,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            borderColor: $borderColor,
            padding: $padding,
            margin: $margin

            ) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {
    state = {
        text: "GologoLo ",
        color: "	#000000",
        fontSize: 10,
        backgroundColor: "#000000",
        borderColor: "#000000",
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        margin: 0,
        logoupdate: false
        
    }


    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value });

    }

    handleTextChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ text: event.target.value });

    }
    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ color: event.target.value });
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value });
    }
    handleBorderColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value });
    }
    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadius to " + event.target.value);
        this.setState({ borderRadius: event.target.value });
    }
    handleBorderWidthChange = (event) => {
        console.log("handleBorderRadius to " + event.target.value);
        this.setState({ borderWidth: event.target.value });
    }
    handlePaddingChange = (event) => {
        console.log("handleBorderRadius to " + event.target.value);
        this.setState({ padding: event.target.value });
    }
    handleMarginChange = (event) => {
    console.log("handleBorderRadius to " + event.target.value);
    this.setState({ margin: event.target.value });
    }


    render() {
        let text, color, fontSize, backgroundColor,borderRadius,borderWidth,borderColor,padding,margin;
        
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                

                {(addLogo, { loading, error }) => (
                    
                <div  className= "viewlogo">
                    <div id="logoinfo" className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home 🏠</Link></h4>
                                <h3 style={{ paddingLeft: 20, fontWeight: "bold"}} className="panel-title">
                                    Create Logo
                            </h3>
                            </div>
                            <div  style={{ backgroundColor: "Lavender", position: "absolute",borderStyle: "solid", borderColor: "white", paddingLeft: 30, paddingRight: 30,paddingTop: 20 }} className="panel-body">
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    addLogo({ variables: { text: text.value, color: color.value, fontSize: parseInt(fontSize.value),backgroundColor: backgroundColor.value,borderRadius: parseInt(borderRadius.value), borderWidth: parseInt(borderWidth.value), borderColor: borderColor.value ,padding: parseInt(padding.value),margin: parseInt(margin.value)} });
                                    text.value = "";
                                    color.value = "";
                                    fontSize.value = "";
                                    backgroundColor.value="";
                                    borderRadius.value="";
                                    borderWidth.value="";
                                    borderColor.value="";
                                    padding.value="";
                                    margin.value="";
                                   
                                }}>
                                    <div style={{ align: "middle" }} className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="text">Text:</label>
                                        <input style={{ position: "center" }} onChange={this.handleTextChange} style={{ width:400}} type="text"  className="form-control" name="text" ref={node => {
                                            text = node;
                                        }} placeholder="Text" defaultValue={this.state.text}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}htmlFor="color">Color:</label>
                                        <input onChange={this.handleTextColorChange} style={{ width:400}} type="color" className="form-control" name="color" ref={node => {
                                            color = node;
                                        }} placeholder="Color" defaultValue={this.state.color} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="fontSize">Font Size:</label>
                                        <input onChange={this.handleFontSizeChange} style={{ width:400}} type="number" min="5" max="200"className="form-control" name="fontSize" ref={node => {
                                            fontSize = node;
                                        }} placeholder="Font Size" defaultValue={this.state.fontSize} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="backgroundColor"> Background Color:</label>
                                        <input onChange={this.handleBackgroundColorChange} style={{ width:400}} type="color" className="form-control" name="backgroundColor" ref={node => {
                                            backgroundColor = node;
                                        }} placeholder="Background color" defaultValue={this.state.backgroundColor}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="borderRadius">Border Radius:</label>
                                        <input onChange={this.handleBorderRadiusChange} style={{ width:400}} type="number" min="0" max="200" className="form-control" name="borderRadius" ref={node => {
                                            borderRadius = node;
                                        }} placeholder="Border Radius" defaultValue={this.state.borderRadius} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="borderWidth">Border Width:</label>
                                        <input onChange={this.handleBorderWidthChange}  style={{ width:400}} type="number" min="0" max="200" className="form-control" name="borderWidth" ref={node => {
                                            borderWidth = node;
                                        }} placeholder="Border Width" defaultValue={this.state.borderWidth} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="borderColor"> Border Color:</label>
                                        <input onChange={this.handleBorderColorChange} style={{ width:400}} type="color" className="form-control" name="borderColor" ref={node => {
                                            borderColor = node;
                                        }} placeholder="Border color" defaultValue={this.state.borderColor} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="padding">Padding:</label>
                                        <input onChange={this.handlePaddingChange} style={{ width:400}} type="number" min="5" max="200" className="form-control" name="padding" ref={node => {
                                            padding = node;
                                        }} placeholder="Padding"  defaultValue={this.state.padding} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="margin">Margin:</label>
                                        <input onChange={this.handleMarginChange}  style={{ width:400}} type="number"  min="0" max="100"className="form-control" name="margin" ref={node => {
                                            margin = node;
                                        }} placeholder="Margin" defaultValue={this.state.margin} />
                                    </div>
                                    
                                    
                                    <button style={{ backgroundColor: "darkcyan" ,fontSize: 25}}type="submit" className="btn btn-success">Submit</button>
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>
                        </div>
                    </div>
                    <div   className="logopreview">
                         <TextEditWorkspace 
                        logo ={this.state} />
                    </div>
                </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;