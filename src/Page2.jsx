import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card'
import Iframe from './Iframe';
import logo from './images/page2img.jpg'

var arrcard2;

function Page2() {
  
     const [framelink, setframelink] = useState('')
     const [card, setcard] = useState([])
    useEffect(() => {
        axios.get('https://api.first.org/data/v1/news',{mode :'no-cors',  redirect: 'follow'})
       
             .then((response) =>{
               const Sdata = response.data.data.slice(20,26)
               setcard(Sdata)
              //  console.log(Sdata.length);
             })
             .catch((error)=>{
                 console.log(error);
             })
         } 
      ,[])



      const deleteItem = (id)=>{
        setcard((oldItems) =>{
          return oldItems.filter((arrElem, index)=>{
            // console.log(card.length);

            return index !== id;
          });
        })
      }
      const clickme = (id)=>{
        console.log(card[id].link);
        setframelink(card[id].link);
        document.getElementsByClassName('myIframe')[0].style.display = 'block'
        document.getElementsByClassName('myIframe')[0].classList.remove('myIframe2')
      }
      const removeFrame = ()=>{
        document.getElementsByClassName('myIframe')[0].classList.add('myIframe2')
        console.log('ok');
        setframelink('')
    }
      arrcard2 = card
    return (
        <div className="myPages ">
        <Iframe
         link={framelink} 
         click={removeFrame}/>
        <div className="row ">
        
    {
        card.map((val,index)=>
             <Card click={clickme}
            key={val.id}
            img={logo}
            id = {index}
           summary = {val.summary.substring(0,85)}
            title={val.title}
            published ={val.published}
            onSelect = {deleteItem}
            link = {val.link}
           /> )
           
    }

    </div>
      </div>
    )
}

export default Page2
export{arrcard2}