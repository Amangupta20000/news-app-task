import React from 'react'



function Card(props) {
    return (
        
        <div className="card m-1" >
        <button onClick={()=>props.onSelect(props.id)} className="btn cross_btn">X</button>
        <div className="card-body mt-1 " onClick={()=>props.click(props.id)}>
        <h5 className="card-title"><strong>{props.title} </strong> </h5>
        <p className="card-text">{props.summary}...</p>
         <p className="card-text"><strong>{props.published}</strong></p> 
        </div>
        <img src={props.img} onClick={()=>props.click(props.id)} className="card-img-top img-fluid" alt="..."/>
        </div>
    )
    
}

export default Card