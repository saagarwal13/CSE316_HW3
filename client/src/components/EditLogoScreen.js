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
            texts
            {
                id
                fontSize
                title
                xpos
                ypos
                color
            }
            images
            {
                id
                url
                xpos
                ypos
                height
                width
            }
            color
            fontSize
            backgroundColor
            borderRadius
            borderWidth
            borderColor
            padding
            margin
            height
            width
            
        }
    }
`;



const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $texts:[LogoText]!,
        $images:[ImageText]!
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $borderColor: String!
        $padding: Int!,
        $margin: Int!,
        $height: Int!,
        $width: Int!) {
            updateLogo(
                id: $id,
                text: $text,
                texts: $texts,
                images: $images,           
                color: $color,
                fontSize: $fontSize
                backgroundColor: $backgroundColor
                borderRadius: $borderRadius
                borderWidth: $borderWidth
                borderColor: $borderColor
                padding: $padding
                margin: $margin
                height: $height
                width: $width) {
                    lastUpdate
                }
        }
`;


class EditLogoScreen extends Component {

    
      state = {
        text: "GoLogoLo",
        texts: [{id:1, title:"GologoLo",fontSize: 50, color:"#FF0000",xpos:5,ypos:5} ],
        images : [],
        color: "#FF0000",
        fontSize: 24,
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        borderRadius: 0,
        borderWidth: 0,
        padding: 0,
        margin: 0,
        height: 5,
        width: 5,
        logoupdate: false,
        logonew: true,
        focus:0,
        highestid:100,
        urlval:"",
        highestimgypos:5
        
        
    }
    


    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ texts: this.state.texts.map(tex=>{if(tex.id==this.state.focus){
             tex.fontSize = parseInt(event.target.value)
        }
        
       
    return tex }), fontSize:event.target.value 
        
        });

    }

    handleTextChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ texts: this.state.texts.map(tex=>{if(tex.id==this.state.focus){
             tex.title = event.target.value
        }
       
    return tex }), text: event.target.value
        
        });

    }
    handleTextColorChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ texts: this.state.texts.map(tex=>{if(tex.id==this.state.focus){
             tex.color = event.target.value
        }
        
    return tex }) ,color: event.target.value
        
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
        console.log("handleBorderRadius to " + event.target.value);
        this.setState({ height: event.target.value });
    }
    handleWidthChange = (event) => {
            console.log("handleBorderRadius to " + event.target.value);
            this.setState({ width: event.target.value });
    }
    handleAddText = ()=>
    {
        var newhighestid= this.state.highestid + 1
        var newhighestimgypos= this.state.highestimgypos + 20
        const newText = {id:newhighestid, title:"GologoLo",fontSize: 20, color:"#FF0000",xpos:20,ypos:newhighestimgypos}
        this.setState({highestid:newhighestid,highestimgypos:newhighestimgypos})
        this.setState({texts:[...this.state.texts,newText]})
      
    }
    handleAddImage  = ()=>
    {
      
        var newhighestid = this.state.highestid + 1
        const newimg = {id:newhighestid, url: this.state.urlval}
        this.setState({highestid:newhighestid})
        this.setState({images:[...this.state.images,newimg]})
     
      
    } 
    handleRemoveImage = ()=>
    {
        this.setState({images:[...this.state.images.filter(img=>img.id!== this.state.focus)]});
      
    }
    handleUrlval=(event)=>
    {    
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
    handleImageClick= (image)=>
    {
        this.setState({focus: image.id})
    }

    handleDrag=(texts)=>
    {
        this.setState({texts:texts})
        console.log("YO")
        console.log(this.state.texts)
    }

    handleImageDrag=(images)=>
    {
        this.setState({images:images})
        
        console.log(this.state)
    }
    handleImageResize=(images)=>
    {
        this.setState({images:images})
    }

    setFocus=(text)=>
    {
        this.setState({focus:text.id})
        console.log(text.id)
    }


    render() {
        //console.log(this.state)
        let texts,images, backgroundColor,borderRadius,borderWidth,borderColor,padding,margin,height,width;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                     
                    
                    if (this.state.logoupdate == false )
                    {
                       this.setState({...data.logo, logoupdate: true}, ()=> console.log(this.state))
                       
                       
                    }
                   
                    
                    data.logo.texts.map(tex => (delete tex.__typename))
                    
                    data.logo.images.map(img => (delete img.__typename))
                    delete data.logo.__typename
                    
                    
                    
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className= "viewlogo">
                                <div id= "logoinfo" className="container">
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
                           <div>
                            <button style={{ backgroundColor: "darkcyan" ,fontSize: 25}} onClick={this.handleRemoveImage}>Remove Image</button>
                            </div>
                                            <h3 style={{ paddingLeft: 20, fontWeight: "bold"}} className="panel-title">
                                                Edit Logo
                                        </h3>
                                        </div>
                                        <div style={{ backgroundColor: "Lavender", position: "absolute", borderStyle: "solid", borderColor: "white", paddingLeft: 30, paddingRight: 30, paddingTop: 20 }} className="panel-body">                                            
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo({ variables: { id: data.logo._id,  text: this.state.text,texts: this.state.texts,images: this.state.images, color:this.state.color, fontSize: parseInt(this.state.fontSize),backgroundColor: backgroundColor.value,borderRadius: parseInt(borderRadius.value), borderWidth: parseInt( borderWidth.value), borderColor:borderColor.value,padding: parseInt(padding.value),margin: parseInt(margin.value),height: parseInt(height.value),width: parseInt(width.value) } });
                                                //text.value = "";
                                                
                                                //color.value = "";
                                                //fontSize.value = "";
                                                backgroundColor.value= "";
                                                borderRadius.value="";
                                                borderWidth.value="";
                                                borderColor.value="";
                                                padding.value="";
                                                margin.value="";
                                                height.value="";
                                                width.value="";
                                            }}>
                                                <div className="form-group">
                                                    <label htmlFor="text">Text:</label>
                                                    <input  onChange={this.handleTextChange} style={{ width:370}}type="text" required className="form-control" name="text" 
                                                     placeholder="Text" value={this.state.text} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="color">Color:</label>
                                                    <input onChange={this.handleTextColorChange} style={{ width:370}} type="color" required className="form-control" name="color" 
                                                    placeholder="Color"  value={this.state.color} /> 
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fontSize">Font Size:</label>
                                                    <input onChange={this.handleFontSizeChange} style={{ width:370}} type= "Number" required min="5" max="200" className="form-control" name="fontSize" 
                                                        
                                                    placeholder="Font Size"  value={this.state.fontSize} /> 
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="backgroundColor">Background Color:</label>
                                                    <input onChange={this.handleBackgroundColorChange} style={{ width:370}} type="color" required className="form-control" name="backgroundColor" ref={node => {
                                                        backgroundColor = node;
                                                    }} placeholder="Background Color" defaultValue={data.logo.backgroundColor} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input onChange={this.handleBorderRadiusChange} style={{ width:370}} type="Number" required min="0" max="200" className="form-control" name="borderRadius" ref={node => {
                                                        borderRadius= node;
                                                    }} placeholder="Border Radius" defaultValue={data.logo.borderRadius} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input onChange={this.handleBorderWidthChange} style={{ width:370}} type="Number" required min="0" max="200" className="form-control" name="borderWidth" ref={node => {
                                                        borderWidth= node;
                                                    }} placeholder="Border Width" defaultValue={data.logo.borderWidth} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input onChange={this.handleBorderColorChange} style={{ width:370}} type="color" required className="form-control" name="borderColor" ref={node => {
                                                        borderColor = node;
                                                    }} placeholder=" Border Color" defaultValue={data.logo.borderColor} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="padding">Padding:</label>
                                                    <input onChange={this.handlePaddingChange} style={{ width:370}} type="Number"  required min="5" max="200" className="form-control" name="padding" ref={node => {
                                                     padding = node;
                                                   }} placeholder="Padding"  defaultValue={data.logo.padding} />
                                                </div>
                                                <div className="form-group">
                                                   <label htmlFor="margin">Margin:</label>
                                                  <input onChange={this.handleMarginChange} style={{ width:370}} type="text" required min="0" max="100" className="form-control" name="margin" ref={node => {
                                                     margin = node;
                                                   }} placeholder="Margin"  defaultValue={data.logo.margin} />
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="height">Height:</label>
                                                  <input onChange={this.handleHeightChange} style={{ width:370}} type="text" required min="50" max="2000" className="form-control" name="height" ref={node => {
                                                   height = node;
                                                   }} placeholder="Height"  defaultValue={data.logo.height} />
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="width">Width:</label>
                                                  <input onChange={this.handleWidthChange} style={{ width:370}} type="text" required min="50" max="2000" className="form-control" name="width" ref={node => {
                                                    width = node;
                                                   }} placeholder="Width"  defaultValue={data.logo.width} />
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
                                logo ={this.state} handleClick={this.handleClick} handleImageClick={this.handleImageClick} handleDrag={this.handleDrag} handleImageDrag= {this.handleImageDrag} handleImageResize={this.handleImageResize} setFocus={this.setFocus}/>
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