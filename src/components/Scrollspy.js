import React, { useState } from 'react'

export default function Scrollspy() {
    const[mycontent, changeMycontent] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const[stbtn, changestbtn] = useState("Enable Dark Mode")
    const changeMode = () =>{
        if(mycontent.color == 'black'){
            changeMycontent({
                color:'white',
                backgroundColor:'black'
            })
            changestbtn("Enable Light Mode")
        }
        else{
            changeMycontent({
                color:'black',
                backgroundColor:'white'
            })
            changestbtn("Enable Dark Mode")
        }
    }
  return (
    <>
<nav id="navbar-example2" className="navbar navbar-expand-lg navbar-dark bg-dark px-3 mb-3">
<a className="navbar-brand" href="#">Navbar</a>
<ul className="nav nav-pills">
<li className="nav-item">
    <a className="nav-link" href="#scrollspyHeading1">First</a>
</li>
<li className="nav-item">
    <a className="nav-link" href="#scrollspyHeading2">Second</a>
</li>
<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
    <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
    </ul>
</li>
</ul>
<button type='button' onClick={changeMode} className = "btn btn-primary my-2 mx-2">{stbtn}</button>
</nav>


<div data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-smooth-scroll="true"
        className="scrollspy-example p-3 rounded"
        style={{ ...mycontent,height: "300px", overflowY: "scroll", border: "2px solid black"}}
        tabIndex="0">
<h4 id="scrollspyHeading1">First heading</h4>
<p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
<h4 id="scrollspyHeading2">Second heading</h4>
<p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
<h4 id="scrollspyHeading3">Third heading</h4>
<p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
<h4 id="scrollspyHeading4">Fourth heading</h4>
<p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
<h4 id="scrollspyHeading5">Fifth heading</h4>
<p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
</div>
{/* <div>
<button type='button' onClick={changeMode} className = "btn btn-primary my-2">{stbtn}</button>
</div> */}

    </>
  )
}
