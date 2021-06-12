import React from 'react'

function Iframe(props) {
    
    return (
        <div className='myIframe'>
        <button className="btn frameButton btn-danger" onClick={()=>props.click()}>X</button>
         <iframe title='modal' className="iframe" src={props.link}  frameBorder="1"></iframe>
        </div>
    )
}

export default Iframe
