import React, { Component } from 'react'
import { Rnd } from 'react-rnd';


class   ImageShow extends Component {

    onResizeStart = (e) => {
        e.stopPropagation();
    }

    

    onDragStop = (e, data) => {
        //e.stopPropagation();
        //e.preventDefault();

    
        
        let images = this.props.images.map(img => img.id===this.props.focus? {...img,ypos:data.y,xpos: data.x} :img)
            
        
        this.props.handleImageDrag( images)
           
        
    }
    onResizeStop = (e, dir, refToElement, delta, position) => {

        let images = this.props.images;
        images.forEach(img => {
            if (img.id === this.props.focus) {
                img.xpos = parseInt(position.x);
                img.ypos = parseInt(position.y);
                img.width += delta.width;
                img.height += delta.height;
            }
        })
       this.props.handleImageResize.bind(this,images)
    }

  
    render() {

        return(

            <Rnd  bounds='parent'
            resizeHandleClasses={{
                bottomLeft: "handle",
                bottomRight: "handle",
                topLeft: "handle",
                topRight: "handle"
            }}
            default={{
                x: this.props.image.xpos,
                y:  this.props.image.ypos,
                width: this.props.image.width,
                height: this.props.image.height,
            }}
            enableResizing={{
                top: true, right: true, bottom: false, left: false,
                topRight: true, bottomRight: true, bottomLeft: true, topLeft: true
            }}
            onDragStop={this.onDragStop} onDragStart={this.props.handleImageClick.bind(this,this.props.image)}
             onResizeStart= {this.onResizeStart} onResizeStop={this.onResizeStop}
             >
                 <div   style={{ 
                 top: this.props.image.ypos, left: this.props.image.xpos, height: this.props.image.height  ,width: this.props.image.width  }} >
                 
               <img height="100%" width="100%" src= {this.props.image.url} alt=""
               />
                 </div>

        

</Rnd>

            


        )

    }


}
export default ImageShow

