import React from 'react'
import PropType from 'prop-types'


const AppLink=(props)=>{
    // let CName=Name.toUpperCase()
    return(
        // <li className="link primary button">
        //     <a className='smoothscroll' 
        //         // href={`${props.NameLink}`} 
        //         onClick={()=>props.OnClick()}
        //     >
        //         {props.Name.toUpperCase()}
        //     </a>
        // </li>

        <button className="link primary button" onClick={() => props.OnClick()}>
            {props.Name.toUpperCase()}
        </button>
    )
}

AppLink.PropType={
    Name: PropType.string.isRequired,
    NameLink: PropType.string.isRequired,
}

export default AppLink;