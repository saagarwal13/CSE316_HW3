
import React, { Component } from 'react';
import { Rnd } from 'react-rnd';


class TextShow extends Component {


   

    onDragStop = (e, data) => {
        //e.stopPropagation();
        //e.preventDefault();

        //let newypos = parseInt(data.y);
        //let newxpos = parseInt(data.x);

        //let texts= this.state.texts.map(tex=>{if(tex.id==this.props.text.id){
            //tex.xpos = newxpos ;
             //tex.ypos=newypos
      // }     
   //return tex })


        
        console.log("changing x and y")
        console.log(this.props.focus)
        let texts = this.props.texts.map(tex => tex.id===this.props.focus ? {...tex,ypos:data.y,xpos: data.x} :tex)
        //this.props.texts.map(tex=> tex.id === this.props.focus ? console.log(tex.id) :tex )

        this.props.handleDrag(texts)  
       
           
        
    }
  
    render() {

        return(
            
               <Rnd  bounds='parent'
                                        
                                        default={{
                                            x: this.props.text.xpos,
                                            y:  this.props.text.ypos,
                                           
                                        }}
                                        
                                        onDragStop={this.onDragStop} onDragStart={this.props.handleClick.bind(this,this.props.text)}
                                        //onResizeStart={this.onResizeStart} onResizeStop={this.onResizeStop}
                                         >
                                             <div   className="moveable" style={{fontSize: this.props.text.fontSize + "px" ,color: this.props.text.color, 
                                             top: this.props.text.ypos, left: this.props.text.xpos, backgroundColor: this.props.focus == this.props.text.id ? "yellow": "Transparent"}} >
                                             {this.props.text.title}
                                             </div>

                                    

            </Rnd>
                
            
            
          



        )


    }
}

export default TextShow