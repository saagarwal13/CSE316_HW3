import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import  TextEditWorkspace   from "./TextEditWorkspace.js";
 import html2canvas from 'html2canvas';
 import domtoimage from 'dom-to-image';

const GET_LOGO = gql`
  query logo($logoId: String) {
    logo(id: $logoId) {
      _id
    
      logoTitle
      texts {
        id
        fontSize
        title
        color
        xpos
        ypos
        
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
    
      
      backgroundColor
      borderRadius
      borderWidth
      borderColor
      padding
      margin
      height
      width
      lastUpdate
    }
  }
`;

const DELETE_LOGO = gql`
  mutation removeLogo($id: String!) {
    removeLogo(id: $id) {
      _id
    }
  }
`;

class ViewLogoScreen extends Component {

  handleClick=()=>
  {

  }
  handleImageClick=()=>
  {

  }
  handleDownload=()=>
  {
    
 

  }
  render() {
    return (
      <Query
        pollInterval={500}
        query={GET_LOGO}
        variables={{ logoId: this.props.match.params.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div className= "viewlogo">
              <div id= "logoinfo" className="container ">
                <div style={{marginLeft:100}} className="panel panel-default">
                  <div className="panel-heading">
                    <h4>
                      <Link to="/">Home 🏠</Link>
                    </h4>
                   
                    <h3 style={{ paddingLeft: 20, fontWeight: "bold"}} className="panel-title">Logo Information</h3>
                  </div>
                  <div style={{ backgroundColor: "#dbdbf0" , position: "relative", width: 510 ,borderStyle: "solid", borderColor: "white", paddingBottom: 17}} className="panel-body">
                    <dl>
                    <dt style={{ fontSize: 23, paddingLeft: 80, paddingTop: 20}} > Logo Title:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 140}} >{data.logo.logoTitle}</dd>
                      <dt style={{ fontSize: 23, paddingLeft: 80, paddingTop: 20}} > Number of Texts:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 140}} >{data.logo.texts.length}</dd>
                      <dt style={{ fontSize: 23, paddingLeft: 80}} > Number of Images:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 140}} >{data.logo.images.length}</dd>
                      <dt style={{ fontSize: 23, paddingLeft: 80}}>Background Color:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 140}}>{data.logo.backgroundColor}</dd>
                      <dt style={{ fontSize: 23, paddingLeft: 80}}>Border Radius:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 140}}>{data.logo.borderRadius}</dd>
                      <dt style={{ fontSize: 23, paddingLeft: 80}}>Border Width:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 140}}>{data.logo.borderWidth}</dd>
                      
                      <dt style={{ fontSize: 23, paddingLeft: 80}}>Padding:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 120}}>{data.logo.padding}</dd>
                      <dt style={{ fontSize: 23, paddingLeft: 80}}>Margin:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 120}}>{data.logo.margin}</dd>
                      <dt style={{ fontSize: 23, paddingLeft: 80}}>Last Updated:</dt>
                      <dd style={{ fontSize: 21, paddingLeft: 120}}>{data.logo.lastUpdate}</dd>
                    </dl>
                    <Mutation
                      mutation={DELETE_LOGO}
                      key={data.logo._id}
                      onCompleted={() => this.props.history.push("/")}
                    >
                      {(removeLogo, { loading, error }) => (
                        <div style={{ fontSize: 24, paddingLeft: 100}}>
                          <form
                            onSubmit={e => {
                              e.preventDefault();
                              removeLogo({ variables: { id: data.logo._id } });
                            }}
                          >
                            <Link
                              to={`/edit/${data.logo._id}`}
                              className="btn btn-success"
                              style={{ fontSize: 30, paddingLeft:20, width:92}}
                            >
                              Edit
                            </Link>
                            &nbsp;
                            <button style={{ fontSize: 30,marginLeft:30}}type="submit" className="btn btn-danger">
                              Delete
                            </button>
                          </form>
                          {loading && <p>Loading...</p>}
                          {error && <p>Error :( Please try again</p>}
                        </div>
                      )}
                    </Mutation>
                  </div>
                </div>
              </div>
              <div  style={{  position: "absolute" }} className="logopreview">
              
              </div>

              
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ViewLogoScreen;

//<TextEditWorkspace 
//logo ={data.logo} handleClick= {this.handleClick} handleImageClick={this.handleImageClick} handleDownload={this.handleDownload} />
