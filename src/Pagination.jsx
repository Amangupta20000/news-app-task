import React from 'react'
import { NavLink, useHistory, } from 'react-router-dom'

function Pagination() {
  // console.log(window.location.href);
  const history = useHistory()
  const next = ()=>{
    
    //console.log(history.location.pathname);
    if(history.location.pathname === '/'){
      history.push('/page2')
    }
    else if (history.location.pathname === '/page2'){
      history.push('/page3')
    }
  }

    return (
        <div className="pageNo">
        <nav aria-label="Page navigation example">
        <ul className="pagination">
        <li className="page-item"><NavLink activeClassName="menu_active" exact className="page-link" to="/">1</NavLink></li>
          <li  className="page-item"><NavLink activeClassName="menu_active" exact className="page-link" to="/page2">2</NavLink></li>
          <li className="page-item"><NavLink activeClassName="menu_active" exact className="page-link" to="/page3">3</NavLink></li>
          <li className="page-item"><button className="page-link" onClick={next}> &gt;&gt; </button></li> 
        </ul>
      </nav>
        </div>
    )
}

export default Pagination
