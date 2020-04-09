import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import  TextEditWorkspace   from "./TextEditWorkspace.js";

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            backgroundColor
            borderRadius
            borderWidth
            borderColor
            padding
            margin
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $borderColor: String!
        $padding: Int!,
        $margin: Int!) {
            updateLogo(
                id: $id,
                text: $text,
                color: $color,
                fontSize: $fontSize
                backgroundColor: $backgroundColor
                borderRadius: $borderRadius
                borderWidth: $borderWidth
                borderColor: $borderColor
                padding: $padding
                margin: $margin) {
                    lastUpdate
                }
        }
`;

class EditLogoScreen extends Component {

      state = {
        text: "GoLogoLo",
        color: "#FF0000",
        fontSize: 24,
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        borderRadius: 0,
        borderWidth: 0,
        padding: 0,
        margin: 0,
        logoupdate: false,
        logonew: true
        
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
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    
                    if (this.state.logoupdate == false )
                    {
                       this.setState({...data.logo, logoupdate: true})
                       
                    }
                    
                    
                    
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className= "viewlogo">
                                <div id= "logoinfo" className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4><Link to="/">Home 🏠</Link></h4>
                                            <h3 className="panel-title">
                                                Edit Logo
                                        </h3>
                                        </div>
                                        <div style={{ backgroundColor: "Lavender", position: "absolute", borderStyle: "solid", borderColor: "white", paddingLeft: 30, paddingRight: 30, paddingTop: 20 }} className="panel-body">                                            
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo({ variables: { id: data.logo._id, text: text.value, color: color.value, fontSize: parseInt(fontSize.value),backgroundColor: backgroundColor.value,borderRadius: parseInt(borderRadius.value), borderWidth: parseInt( borderWidth.value), borderColor:borderColor.value,padding: parseInt(padding.value),margin: parseInt(margin.value) } });
                                                text.value = "";
                                                
                                                color.value = "";
                                                fontSize.value = "";
                                                backgroundColor.value= "";
                                                borderRadius.value="";
                                                borderWidth.value="";
                                                borderColor.value="";
                                                padding.value="";
                                                margin.value="";
                                            }}>
                                                <div className="form-group">
                                                    <label htmlFor="text">Text:</label>
                                                    <input  onChange={this.handleTextChange} style={{ width:370}}type="text" className="form-control" name="text" ref={node => {
                                                        text = node;
                                                    }} placeholder="Text" defaultValue={data.logo.text} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="color">Color:</label>
                                                    <input onChange={this.handleTextColorChange} style={{ width:370}} type="color" className="form-control" name="color" ref={node => {
                                                        color = node;
                                                    }} placeholder="Color" defaultValue={data.logo.color} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fontSize">Font Size:</label>
                                                    <input onChange={this.handleFontSizeChange} style={{ width:370}} type= "Number" min="5" max="200" className="form-control" name="fontSize" ref={node => {
                                                        fontSize = node;
                                                    }} placeholder="Font Size" defaultValue={data.logo.fontSize} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="backgroundColor">Background Color:</label>
                                                    <input onChange={this.handleBackgroundColorChange} style={{ width:370}} type="color" className="form-control" name="backgroundColor" ref={node => {
                                                        backgroundColor = node;
                                                    }} placeholder="Background Color" defaultValue={data.logo.backgroundColor} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input onChange={this.handleBorderRadiusChange} style={{ width:370}} type="Number" min="0" max="200" className="form-control" name="borderRadius" ref={node => {
                                                        borderRadius= node;
                                                    }} placeholder="Border Radius" defaultValue={data.logo.borderRadius} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input onChange={this.handleBorderWidthChange} style={{ width:370}} type="Number" min="0" max="200" className="form-control" name="borderWidth" ref={node => {
                                                        borderWidth= node;
                                                    }} placeholder="Border Width" defaultValue={data.logo.borderWidth} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input onChange={this.handleBorderColorChange} style={{ width:370}} type="color" className="form-control" name="borderColor" ref={node => {
                                                        borderColor = node;
                                                    }} placeholder=" Border Color" defaultValue={data.logo.borderColor} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="padding">Padding:</label>
                                                    <input onChange={this.handlePaddingChange} style={{ width:370}} type="Number"  min="5" max="200" className="form-control" name="padding" ref={node => {
                                                     padding = node;
                                                   }} placeholder="Padding"  defaultValue={data.logo.padding} />
                                                </div>
                                                <div className="form-group">
                                                   <label htmlFor="margin">Margin:</label>
                                                  <input onChange={this.handleMarginChange} style={{ width:370}} type="text" min="0" max="100" className="form-control" name="margin" ref={node => {
                                                     margin = node;
                                                   }} placeholder="Margin"  defaultValue={data.logo.margin} />
                                               </div>
                                                <button style={{ backgroundColor: "darkcyan" ,fontSize: 25}} type="submit" className="btn btn-success">Submit</button>
                                            </form>
                                            {loading && <p>Loading...</p>}
                                            {error && <p>Error :( Please try again</p>}
                                        </div>
                                    </div>
                                </div>
                                <div style={{  position: "absolute" }} className="logopreview">
                                <TextEditWorkspace 
                                logo ={this.state} />
                                </div>
                             </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;