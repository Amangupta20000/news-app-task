import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import logo from './images/reader.jpg'
import { BsCardHeading , BsListUl} from 'react-icons/bs';
import {arrcard} from './Page1'
import {arrcard2} from './Page2'
import {arrcard3} from './Page3'



const Sidebar = () => {
    const history = useHistory()
    console.log(history.location.pathname);
    const show_sidebar = ()=>{
        document.getElementsByClassName('sidebar2')[0].style.zIndex = "3"
        document.getElementsByClassName('sidebar2')[0].classList.add('animationFadeIn')
        document.getElementsByClassName('sidebar')[0].classList.remove('animationFadeIn')
    }
    const toggle_hori = ()=> {
        if(history.location.pathname === '/'){
        
            for(var i=0 ; i<arrcard.length ;i++ ) {
            document.getElementsByClassName('card')[i].classList.remove('cards')
            document.getElementsByClassName('card-body')[i].style.order = '1'
            document.getElementsByClassName('card-img-top')[i].style.order = '2'
            document.getElementsByClassName('card-img-top')[i].classList.remove('logo2')
            document.getElementsByClassName('card-body')[i].classList.remove('logo_text')
            document.getElementsByClassName('card')[i].style.display = 'block'
            document.getElementsByClassName('card-img-top')[i].classList.add('img-fluid')
            document.getElementsByClassName('cross_btn')[i].classList.remove('cross_btn2')
        }
        document.getElementsByClassName('card')[0].style.display = 'block'}
        
        else if(history.location.pathname === '/page2'){
            for(var j=0 ; j<arrcard2.length ;j++ ) {
                document.getElementsByClassName('card')[j].classList.remove('cards')
                document.getElementsByClassName('card-body')[j].style.order = '1'
                document.getElementsByClassName('card-img-top')[j].style.order = '2'
                document.getElementsByClassName('card-img-top')[j].classList.remove('logo2')
                document.getElementsByClassName('card-body')[j].classList.remove('logo_text')
                document.getElementsByClassName('card')[j].style.display = 'block'
                document.getElementsByClassName('card-img-top')[j].classList.add('img-fluid')
                document.getElementsByClassName('cross_btn')[j].classList.remove('cross_btn2')
            }
            document.getElementsByClassName('card')[0].style.display = 'block'
        }
        else{
            for(var k=0 ; k<arrcard3.length ;k++ ) {
                document.getElementsByClassName('card')[k].classList.remove('cards')
                document.getElementsByClassName('card-body')[k].style.order = '1'
                document.getElementsByClassName('card-img-top')[k].style.order = '2'
                document.getElementsByClassName('card-img-top')[k].classList.remove('logo2')
                document.getElementsByClassName('card-body')[k].classList.remove('logo_text')
                document.getElementsByClassName('card')[k].style.display = 'block'
                document.getElementsByClassName('card-img-top')[k].classList.add('img-fluid')
                document.getElementsByClassName('cross_btn')[k].classList.remove('cross_btn2')
            }
            document.getElementsByClassName('card')[0].style.display = 'block'
        }
    }

    const toggle_ver = () => {
        if(history.location.pathname === '/'){
        for(var i=0 ; i<arrcard.length ;i++ ) {

            document.getElementsByClassName('card')[i].classList.add('cards')
            document.getElementsByClassName('card-body')[i].style.order = '2'
            document.getElementsByClassName('card-img-top')[i].style.order = '1'
            document.getElementsByClassName('card-img-top')[i].classList.add('logo2')
            document.getElementsByClassName('card-img-top')[i].classList.remove('img-fluid')
            document.getElementsByClassName('card-body')[i].classList.add('logo_text')
            document.getElementsByClassName('card')[i].style.display = 'grid'
            document.getElementsByClassName('card')[i].style.gridTemplateColumns = '8rem auto'
            document.getElementsByClassName('cross_btn')[i].classList.add('cross_btn2')
        }
        document.getElementsByClassName('card')[0].style.display = 'grid'
        document.getElementsByClassName('card')[0].style.gridTemplateColumns = '8rem auto'}

        else if(history.location.pathname === '/page2'){
            for(var j=0 ; j<arrcard2.length ;j++ ) {

                document.getElementsByClassName('card')[j].classList.add('cards')
                document.getElementsByClassName('card-body')[j].style.order = '2'
                document.getElementsByClassName('card-img-top')[j].style.order = '1'
                document.getElementsByClassName('card-img-top')[j].classList.add('logo2')
                document.getElementsByClassName('card-img-top')[j].classList.remove('img-fluid')
                document.getElementsByClassName('card-body')[j].classList.add('logo_text')
                document.getElementsByClassName('card')[j].style.display = 'grid'
                document.getElementsByClassName('card')[j].style.gridTemplateColumns = '8rem auto'
                document.getElementsByClassName('cross_btn')[j].classList.add('cross_btn2')
            }
            document.getElementsByClassName('card')[0].style.display = 'grid'
            document.getElementsByClassName('card')[0].style.gridTemplateColumns = '8rem auto'}
            
            else{
                for(var k=0 ; k<arrcard3.length ;k++ ) {

                    document.getElementsByClassName('card')[k].classList.add('cards')
                    document.getElementsByClassName('card-body')[k].style.order = '2'
                    document.getElementsByClassName('card-img-top')[k].style.order = '1'
                    document.getElementsByClassName('card-img-top')[k].classList.add('logo2')
                    document.getElementsByClassName('card-img-top')[k].classList.remove('img-fluid')
                    document.getElementsByClassName('card-body')[k].classList.add('logo_text')
                    document.getElementsByClassName('card')[k].style.display = 'grid'
                    document.getElementsByClassName('card')[k].style.gridTemplateColumns = '8rem auto'
                    document.getElementsByClassName('cross_btn')[k].classList.add('cross_btn2')
                }
                document.getElementsByClassName('card')[0].style.display = 'grid'
                document.getElementsByClassName('card')[0].style.gridTemplateColumns = '8rem auto'}
    }


    return (
        <div className="sidebar container ">
           <div className="container reader_div bg-light ">
                <img className='logo' src={logo} alt="img"  />
                <label className="logo_text" > <strong> Hi Reader,</strong> <br/> Here's your News! </label>
           
           </div>


           <div className="container reader_div bg-light">
                <h3 className="logo_text2 text-center" >View Toggle </h3>
                <div className="text-center">
                <button activeclassname='toggle_btn' type="button" className="button_sidebar btn" onClick={toggle_hori}><BsCardHeading/></button>
                <button activeclassname='toggle_btn' type="button" className="button_sidebar btn" onClick={toggle_ver} ><BsListUl/></button>
                </div>
           </div>


           <div className="container reader_div bg-light">
                <h3 className="logo_text2 text-center" >Have a Feedback ? </h3>
                <div className="text-center">
                <NavLink  type="button" className="feedback_btn btn" to="/" onClick={show_sidebar} ><strong> We are Listening!</strong></NavLink>
                </div>
           </div>


           
        </div>
    )
}

export default Sidebar
