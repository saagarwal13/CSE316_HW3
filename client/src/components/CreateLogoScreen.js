import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import  TextEditWorkspace   from "./TextEditWorkspace.js";
import  EditLogoScreen from "./EditLogoScreen";

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $texts: [LogoText]!,
        $images: [ImageText]!
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!
        $borderColor: String!
        $padding: Int!,
        $margin:  Int!,
        $height:  Int!,
        $width:  Int!
        
        
        ) {
        addLogo(
            text: $text,
            texts: $texts,
            images: $images,
            color: $color,
            fontSize: $fontSize,
            backgroundColor: $backgroundColor,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            borderColor: $borderColor,
            padding: $padding,
            margin: $margin,
            height: $height,
            width: $width

            ) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {
    state = {
        texts: [{id:1, title:"GologoLo",fontSize: 20, color:"#FF0000"} ],
        images:[],
        text: "GologoLo ",
        color: "	#000000",
        fontSize: 10,
        backgroundColor: "#FF0000",
        borderColor: "#000000",
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        margin: 0,
        height: 50,
        width: 50,
        logoupdate: false,
        focus: 0,
        highestid: 1,
        highestimgid:0,
        urlval: ""
        
    }


    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ texts: this.state.texts.map(tex=>{if(tex.id==this.state.focus){
             tex.fontSize = parseInt(event.target.value)
        }
    return tex }),fontSize:event.target.value
        
        });

    }
    handleTextChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ texts: this.state.texts.map(tex=>{if(tex.id==this.state.focus){
             tex.title = event.target.value
        }
    return tex }) ,text:event.target.value
        
        });

    }
    handleTextColorChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ texts: this.state.texts.map(tex=>{if(tex.id==this.state.focus){
             tex.color = event.target.value
        }
    return tex }) ,color:event.target.value
        
        });
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
    handleHeightChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ height: event.target.value });
    }
    handleWidthChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ width: event.target.value });
    }
    handleAddText = (event) => {
         var newhighestid= this.state.highestid + 1
        const newText = {id:newhighestid, title:"GologoLo",fontSize: 20, color:"#FF0000"}
        this.setState({highestid:newhighestid})
        this.setState({texts:[...this.state.texts,newText]})
    }
    handleAddImage = (event) =>
    {
        console.log(" handle add image")
        var newhighestimgid = this.state.highestimgid + 1
        const newimg = {id:newhighestimgid, url: this.state.urlval}
        this.setState({highestimgid:newhighestimgid})
        this.setState({images:[...this.state.images,newimg]})

        
        


    }
    handleUrlval=(event)=>
    {    console.log(" url ")
        this.setState({urlval: event.target.value})
        
    }
    handleRemoveText = ()=>
    {
        this.setState({texts:[...this.state.texts.filter(tex=>tex.id!== this.state.focus)]});
    }
    handleClick=(text)=>
    {
        this.setState(state => ({
            ...state,
            focus: text.id,fontSize: text.fontSize ,text: text.title,color: text.color
        }));
        
    
        
    }


    render() {
        console.log(this.state)
        let texts,images, backgroundColor,borderRadius,borderWidth,borderColor,padding,margin,height,width;
        
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                

                {(addLogo, { loading, error }) => (
                    
                <div  className= "viewlogo">
                    <div id="logoinfo" className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home 🏠</Link></h4>
                                <div>
                            <button style={{ backgroundColor: "darkcyan" ,fontSize: 25}} onClick={this.handleAddText}>Add text</button>
                            </div>
                            <div>
                            <button style={{ backgroundColor: "darkcyan" ,fontSize: 25}} onClick={this.handleRemoveText}>Remove text</button>
                            </div>

                        
                         <label>
                                Image Url:
                          <input type="text" value={this.state.urlval} onChange={this.handleUrlval} />
                          </label>
                           <button onClick= {this.handleAddImage } />
  
                            

                                <h3 style={{ paddingLeft: 20, fontWeight: "bold"}} className="panel-title">
                                    Create Logo
                                    
                            </h3>
                            
                            </div>
                            
                            
                            <div  style={{ backgroundColor: "Lavender", position: "absolute",borderStyle: "solid", borderColor: "white", paddingLeft: 30, paddingRight: 30,paddingTop: 20 }} className="panel-body">
                                
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    
                                    addLogo({ variables: { text: this.state.text,texts: this.state.texts,images: this.state.images, color: this.state.color, fontSize: parseInt(this.state.fontSize),backgroundColor: backgroundColor.value,borderRadius: parseInt(borderRadius.value), borderWidth: parseInt(borderWidth.value), borderColor: borderColor.value ,padding: parseInt(padding.value),margin: parseInt(margin.value),height: parseInt(height.value),width: parseInt(width.value)} });
                                    //text.value = "";
                                    //texts.value=""
                                    //color.value = "";
                                    //fontSize.value = "";
                                    backgroundColor.value="";
                                    borderRadius.value="";
                                    borderWidth.value="";
                                    borderColor.value="";
                                    padding.value="";
                                    margin.value="";
                                    height.value= "";
                                    width.value= "";
                                    
                                   
                                }}>
                                    <div style={{ align: "middle" }} className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="text">Text:</label>
                                        <input style={{ position: "center" }} onChange={this.handleTextChange} style={{ width:400}} type="text" required className="form-control" name="text" 
                                            placeholder="Text" value={this.state.text}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}htmlFor="color">Color:</label>
                                        <input onChange={this.handleTextColorChange} style={{ width:400}} type="color" required className="form-control" name="color" 
                                         placeholder="Color" value={this.state.color} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="fontSize">Font Size:</label>
                                        <input onChange={this.handleFontSizeChange} style={{ width:400}} type="number" required min="5" max="200"className="form-control" name="fontSize" 
                                             placeholder="Font Size" value={this.state.fontSize} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="backgroundColor"> Background Color:</label>
                                        <input onChange={this.handleBackgroundColorChange} style={{ width:400}} type="color" required className="form-control" name="backgroundColor" ref={node => {
                                            backgroundColor = node;
                                        }} placeholder="Background color" defaultValue={this.state.backgroundColor}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}} htmlFor="borderRadius">Border Radius:</label>
                                        <input onChange={this.handleBorderRadiusChange} style={{ width:400}} type="number" required min="0" max="200" className="form-control" name="borderRadius" ref={node => {
                                            borderRadius = node;
                                        }} placeholder="Border Radius" defaultValue={this.state.borderRadius} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="borderWidth">Border Width:</label>
                                        <input onChange={this.handleBorderWidthChange}  style={{ width:400}} type="number" required min="0" max="200" className="form-control" name="borderWidth" ref={node => {
                                            borderWidth = node;
                                        }} placeholder="Border Width" defaultValue={this.state.borderWidth} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="borderColor"> Border Color:</label>
                                        <input onChange={this.handleBorderColorChange} style={{ width:400}} type="color" required className="form-control" name="borderColor" ref={node => {
                                            borderColor = node;
                                        }} placeholder="Border color" defaultValue={this.state.borderColor} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="padding">Padding:</label>
                                        <input onChange={this.handlePaddingChange} style={{ width:400}} type="number" required min="5" max="200" className="form-control" name="padding" ref={node => {
                                            padding = node;
                                        }} placeholder="Padding"  defaultValue={this.state.padding} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="margin">Margin:</label>
                                        <input onChange={this.handleMarginChange}  style={{ width:400}} type="number" required  min="0" max="100"className="form-control" name="margin" ref={node => {
                                            margin = node;
                                        }} placeholder="Margin" defaultValue={this.state.margin} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="height">Height:</label>
                                        <input onChange={this.handleHeightChange}  style={{ width:400}} type="number" required  min="50" max="100"className="form-control" name="height" ref={node => {
                                            height = node;
                                        }} placeholder="Height" defaultValue={this.state.height} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" , fontStyle: "italic", fontSize: 16}}  htmlFor="width">Width:</label>
                                        <input onChange={this.handleWidthChange}  style={{ width:400}} type="number" required  min="50" max="100"className="form-control" name="width" ref={node => {
                                            width = node;
                                        }} placeholder="Width" defaultValue={this.state.width} />
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
                        logo ={this.state} handleClick={this.handleClick} />
                    </div>
                </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;