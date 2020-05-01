import React from 'react'
import '../App.css'

function Boxes(props){
    
    return(
        <div className="box  a" >
           <div>
           {(props.number === props.img) ?
           <p className="num" onClick={props.increment}>{props.number+1}</p>:
           
           <p className="num">{props.number+1}</p>
           }
           {(props.img >= props.number+1) &&

            <p className='text'><hr className="img" /></p>
        
        }
            </div> 
           
        </div>
    )
}

export default Boxes