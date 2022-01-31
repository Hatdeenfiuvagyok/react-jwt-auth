import React from 'react';
import "../App.css";
import {GyakorlatAdatok} from "./GyakorlatAdatok";

function Gyakorlatok(props) {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
            {GyakorlatAdatok.map((val, key)=>{
                return(
                    <li key={key}
                    className='row'
                    onClick={()=> {
                        window.location.pathname = val.link1;
                    }}
                    >
                        <div>
                            {val.title1}
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    );
}

export default Gyakorlatok;