import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/reader.jpg'




const Sidebar2 = () => {

    const show_sidebar = () =>{
        document.getElementsByClassName('sidebar2')[0].style.zIndex = "-1"
        document.getElementsByClassName('sidebar2')[0].classList.remove('animationFadeIn')
        document.getElementsByClassName('sidebar')[0].classList.add('animationFadeIn')

    }

    return (
        <div className="sidebar2 container ">
         <div className="row">
        
        <div className="col-lg-4">
        <div className="container reader_div bg-light ">
                <img className='logo' src={logo} alt="img"  />
                <label className="logo_text" > <strong> Hi Reader,</strong> <br/> Here's your News! </label> 
           </div>


           <div className="container reader_div bg-light">
                <h3 className="logo_text2 text-center" >Have a Feedback ? </h3>
                <div className="text-center">
                <NavLink  type="button" onClick={show_sidebar} className="feedback_btn btn btn-danger" to='/' ><strong> We are Listening!</strong></NavLink>
                </div>     
           </div>
           </div>


           <div className="col-lg-6">
                <h3 className="mt-5 ">Thank you so much for taking the time!</h3>
                <h5>Please provide the below details!</h5>

                <form>

                <div className="my-4 pt-4 ">
                    <label htmlFor="FName" className="form-label">First Name :</label>
                    <input type="text" placeholder="John" className="form-control" id="FName" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-2">
                    <label htmlFor="LName" className="form-label">Last Name :</label>
                    <input type="text" placeholder="Doe" className="form-control" id="LName" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-2">
                <label htmlFor="Address" className="form-label">Address : </label>
                <textarea placeholder="Enter Your Full Postal Address" className="form-control" id="Address" rows="4" cols="50" name="comment" form="usrform"/>
                </div>

                <div className="mb-2">
                    <label htmlFor="Country" className="form-label">Country :</label>
                    <input placeholder="India" type="search" className="form-control" id="Country" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-2">
                    <label htmlFor="Email" className="form-label">Email ID :</label>
                    <input type="email" required className="form-control" placeholder="example@sample.com" id="Email" aria-describedby="emailHelp"/>
                </div>
                
                <div className="mb-2">
                <p  className="form-label">Phone Number :</p>
                <input type="number" aria-label="First name" className="form-control " placeholder="+91 123456789"/>
              </div>
              
                <button type="submit" className="btn btn-lg btn-success mt-3">Submit Feedback</button>
                </form>


           </div>


        </div>    
        </div>
    )
}

export default Sidebar2
