import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;
var newlogos=[];

class HomeScreen extends Component {
   sortingorder=(logo1, logo2)=>
   {
       logo1.lastUpdate = new Date();
       
    return (logo1.lastUpdate.valueOf()).localeCompare (logo2.lastUpdate.valueOf());
    
    
   }
   
    render() {
        
        
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    {data.logos= data.logos.sort((a, b) => b.lastUpdate > a.lastUpdate)}
                    //console.log(typeof(data.logos[1].lastUpdate))
                   // console.log(data.logos[1].lastUpdate);
                    //console.log(data.logos);
                    //{data.logos.sort(this.sortingorder)}
                    return (
                        <div  className="container row">
                            <div style={{ padding: 20}} className="col s4">
                                <h3 style={{ textAlign: "center", fontSize: 40 }}>Recent Work</h3>
                                
                                
                                {data.logos.map((logo, index) => (
                                    <div key={index} className='home_logo_link'
                                        style={{ cursor: "pointer", fontSize: 27, color: "DarkCyan", textAlign: "center" }}>
                                        <Link to={`/view/${logo._id}`}>{logo.text}</Link>
                                    </div>
                                ))}
                            </div >
                            <div className="col s8" >
                                <div style={{ fontSize:85, height:350}}  id="home_banner_container">
                                    goLogolo<br />
                                    Logo Maker
                                </div>
                                <div >
                                    <Link style={{ cursor: "pointer",alignContent: "center",backgroundColor: "DarkCyan", fontSize: 30,width: "45%",margin: 20,height:66  }} id="add_logo_button" to="/create" className="btn btn-primary btn-lg">Add Logo</Link>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
