import React, { Component } from 'react';
import { Rnd } from 'react-rnd';

class TextShow extends Component {


    onDragStart = (e) => {
        e.stopPropagation();
        
    }

    onDragStop = (e, data) => {
        e.stopPropagation();
        e.preventDefault();

        //let newypos = parseInt(data.y);
        //let newxpos = parseInt(data.x);

        //let texts= this.state.texts.map(tex=>{if(tex.id==this.props.text.id){
            //tex.xpos = newxpos ;
             //tex.ypos=newypos
      // }     
   //return tex })


        
        this.props.setFocus(this.props.text)  

        let texts = this.props.texts.map(tex => tex.id===this.props.focus? {...tex,ypos:data.y,xpos: data.x} :tex)

        this.props.handleDrag(texts)  
        /*texts.forEach(tex => {
            if (tex.id === this.props.focus.id) {
                tex.ypos = parseInt(data.y);
                tex.xpos = parseInt(data.x);
            }
        });*/
         
        this.props.handleDrag(texts)
           
        
    }
    /*onResizeStop = (e, dir, refToElement, delta, position) => {
        let texts = this.state.texts;
        texts.forEach(tex => {
            if (tex === this.state.focus) {
                tex.left = parseInt(position.x);
                tex.top = parseInt(position.y);
                tex.width += delta.width;
                tex.height += delta.height;
            }
        })
        this.setState({
            texts: texts,
            savable: true,
        });
    }*/
  
    render() {

        return(
            
               <Rnd  bounds='parent'
                                        
                                        default={{
                                            x: this.props.text.xpos,
                                            y:  this.props.text.ypos,
                                           
                                        }}
                                        
                                        onDragStop={this.onDragStop} onDragStart={this.onDragStart}
                                        //onResizeStart={this.onResizeStart} onResizeStop={this.onResizeStop}
                                         >
                                             <div  onClick={this.props.handleClick.bind(this,this.props.text)} onDragStop={this.onDragStop} onDragStart={this.onDragStart} className="moveable" style={{fontSize: this.props.text.fontSize + "px" ,color: this.props.text.color, 
                                             top: this.props.text.ypos, left: this.props.text.xpos}} >
                                             {this.props.text.title}
                                             </div>

                                    

            </Rnd>
                
            
            
          



        )


    }
}

export default TextShow