import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { menuData } from './menuData';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [toogle, setToogle] = useState(false);
    const ref1 = useRef();
    const ref2 = useRef();      // The sidebar menu button


    // Event listener 2: listen on the event whether the menu button is clicked => open / close the sidebar
    const onToogle = () => {
        setSidebar(!sidebar);
        setToogle(!toogle);
    }

    // Event listener 3: listen on event whichever nav item is clicked => close the sidebar
    const sideBarCollapsed = () => {
        setSidebar(false);
        setToogle(false);
    };


    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (   (ref1.current && !ref1.current.contains(event.target) )
                && (ref2.current && !ref2.current.contains(event.target) ) // BOTH ref is not the target of the event 
               ) {
                sideBarCollapsed();
            }
        };
        
        const handleResize = () => {
            if (window.screenY < 640) {
                sideBarCollapsed();
            } 
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleResize)
    })


    return (
      <Fragment >
          <div className="container">
            <header  ref={ref2}>
                {/* Sidebar Menu Icon */}
                <Link to='#' className='menu-icon' onClick = {onToogle}>
                    <div className={toogle ? 'nav-sidebar-icon active' : 'nav-sidebar-icon' }></div>
                </Link>

                <ul>
                        { menuData.map((item,index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}
                                        onClick={sideBarCollapsed}
                                        className="header-link"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                        }
                    </ul>
            </header>

            {/* Sidebar */}
            <div  className={sidebar ? 'nav-sidebar active' : 'nav-sidebar'}>
                <ul ref={ref1}>
                    { menuData.map((item,index) => {
                        return (
                                <Link to={item.path}
                                    onClick={sideBarCollapsed}
                                    className="nav-sidebar-link"
                                >
                                    <li key={index}>
                                        {item.title}
                                    </li>
                                </Link>
                        )
                    })
                    }
                </ul>
            </div>
        </div>

      </Fragment>
    )
}

export default Navbar
